# `mpa` Submodule <a name="`mpa` Submodule" id="@cdk_utils/iam.mpa"></a>


## Structs <a name="Structs" id="Structs"></a>

### MpaApprovalTeamArnComponents <a name="MpaApprovalTeamArnComponents" id="@cdk_utils/iam.mpa.MpaApprovalTeamArnComponents"></a>

Parsed components of a approval-team ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mpa.MpaApprovalTeamArnComponents.Initializer"></a>

```typescript
import { mpa } from '@cdk_utils/iam'

const mpaApprovalTeamArnComponents: mpa.MpaApprovalTeamArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mpa.MpaApprovalTeamArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mpa.MpaApprovalTeamArnComponents.property.approvalTeamId">approvalTeamId</a></code> | <code>string</code> | The ApprovalTeamId component. |
| <code><a href="#@cdk_utils/iam.mpa.MpaApprovalTeamArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mpa.MpaApprovalTeamArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mpa.MpaApprovalTeamArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `approvalTeamId`<sup>Required</sup> <a name="approvalTeamId" id="@cdk_utils/iam.mpa.MpaApprovalTeamArnComponents.property.approvalTeamId"></a>

```typescript
public readonly approvalTeamId: string;
```

- *Type:* string

The ApprovalTeamId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mpa.MpaApprovalTeamArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mpa.MpaApprovalTeamArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MpaApprovalTeamArnProps <a name="MpaApprovalTeamArnProps" id="@cdk_utils/iam.mpa.MpaApprovalTeamArnProps"></a>

Properties for building a approval-team ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mpa.MpaApprovalTeamArnProps.Initializer"></a>

```typescript
import { mpa } from '@cdk_utils/iam'

const mpaApprovalTeamArnProps: mpa.MpaApprovalTeamArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mpa.MpaApprovalTeamArnProps.property.approvalTeamId">approvalTeamId</a></code> | <code>string</code> | The ApprovalTeamId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mpa.MpaApprovalTeamArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mpa.MpaApprovalTeamArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mpa.MpaApprovalTeamArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `approvalTeamId`<sup>Required</sup> <a name="approvalTeamId" id="@cdk_utils/iam.mpa.MpaApprovalTeamArnProps.property.approvalTeamId"></a>

```typescript
public readonly approvalTeamId: string;
```

- *Type:* string

The ApprovalTeamId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mpa.MpaApprovalTeamArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mpa.MpaApprovalTeamArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mpa.MpaApprovalTeamArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MpaIdentitySourceArnComponents <a name="MpaIdentitySourceArnComponents" id="@cdk_utils/iam.mpa.MpaIdentitySourceArnComponents"></a>

Parsed components of a identity-source ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mpa.MpaIdentitySourceArnComponents.Initializer"></a>

```typescript
import { mpa } from '@cdk_utils/iam'

const mpaIdentitySourceArnComponents: mpa.MpaIdentitySourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mpa.MpaIdentitySourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mpa.MpaIdentitySourceArnComponents.property.identitySourceId">identitySourceId</a></code> | <code>string</code> | The IdentitySourceId component. |
| <code><a href="#@cdk_utils/iam.mpa.MpaIdentitySourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mpa.MpaIdentitySourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mpa.MpaIdentitySourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identitySourceId`<sup>Required</sup> <a name="identitySourceId" id="@cdk_utils/iam.mpa.MpaIdentitySourceArnComponents.property.identitySourceId"></a>

```typescript
public readonly identitySourceId: string;
```

- *Type:* string

The IdentitySourceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mpa.MpaIdentitySourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mpa.MpaIdentitySourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MpaIdentitySourceArnProps <a name="MpaIdentitySourceArnProps" id="@cdk_utils/iam.mpa.MpaIdentitySourceArnProps"></a>

Properties for building a identity-source ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mpa.MpaIdentitySourceArnProps.Initializer"></a>

```typescript
import { mpa } from '@cdk_utils/iam'

const mpaIdentitySourceArnProps: mpa.MpaIdentitySourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mpa.MpaIdentitySourceArnProps.property.identitySourceId">identitySourceId</a></code> | <code>string</code> | The IdentitySourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mpa.MpaIdentitySourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mpa.MpaIdentitySourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mpa.MpaIdentitySourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `identitySourceId`<sup>Required</sup> <a name="identitySourceId" id="@cdk_utils/iam.mpa.MpaIdentitySourceArnProps.property.identitySourceId"></a>

```typescript
public readonly identitySourceId: string;
```

- *Type:* string

The IdentitySourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mpa.MpaIdentitySourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mpa.MpaIdentitySourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mpa.MpaIdentitySourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MpaSessionArnComponents <a name="MpaSessionArnComponents" id="@cdk_utils/iam.mpa.MpaSessionArnComponents"></a>

Parsed components of a session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mpa.MpaSessionArnComponents.Initializer"></a>

```typescript
import { mpa } from '@cdk_utils/iam'

const mpaSessionArnComponents: mpa.MpaSessionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mpa.MpaSessionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mpa.MpaSessionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mpa.MpaSessionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.mpa.MpaSessionArnComponents.property.sessionId">sessionId</a></code> | <code>string</code> | The SessionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mpa.MpaSessionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mpa.MpaSessionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mpa.MpaSessionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdk_utils/iam.mpa.MpaSessionArnComponents.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

The SessionId component.

---

### MpaSessionArnProps <a name="MpaSessionArnProps" id="@cdk_utils/iam.mpa.MpaSessionArnProps"></a>

Properties for building a session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mpa.MpaSessionArnProps.Initializer"></a>

```typescript
import { mpa } from '@cdk_utils/iam'

const mpaSessionArnProps: mpa.MpaSessionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mpa.MpaSessionArnProps.property.sessionId">sessionId</a></code> | <code>string</code> | The SessionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mpa.MpaSessionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mpa.MpaSessionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mpa.MpaSessionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdk_utils/iam.mpa.MpaSessionArnProps.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

The SessionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mpa.MpaSessionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mpa.MpaSessionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mpa.MpaSessionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### MpaActions <a name="MpaActions" id="@cdk_utils/iam.mpa.MpaActions"></a>

IAM action constants for the mpa service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mpa.MpaActions.Initializer"></a>

```typescript
import { mpa } from '@cdk_utils/iam'

new mpa.MpaActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.actionGetApprovalTeam">actionGetApprovalTeam</a></code> | <code>string</code> | [Read] mpa:GetApprovalTeam. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.actionGetIdentitySource">actionGetIdentitySource</a></code> | <code>string</code> | [Read] mpa:GetIdentitySource. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.actionGetPolicyVersion">actionGetPolicyVersion</a></code> | <code>string</code> | [Read] mpa:GetPolicyVersion. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] mpa:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.actionGetSession">actionGetSession</a></code> | <code>string</code> | [Read] mpa:GetSession. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.CancelSession">CancelSession</a></code> | <code>string</code> | [Write] mpa:CancelSession. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.CreateApprovalTeam">CreateApprovalTeam</a></code> | <code>string</code> | [Write] mpa:CreateApprovalTeam. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.CreateIdentitySource">CreateIdentitySource</a></code> | <code>string</code> | [Write] mpa:CreateIdentitySource. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.DeleteIdentitySource">DeleteIdentitySource</a></code> | <code>string</code> | [Write] mpa:DeleteIdentitySource. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.DeleteInactiveApprovalTeamVersion">DeleteInactiveApprovalTeamVersion</a></code> | <code>string</code> | [Write] mpa:DeleteInactiveApprovalTeamVersion. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] mpa:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.ListApprovalTeams">ListApprovalTeams</a></code> | <code>string</code> | [List] mpa:ListApprovalTeams. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.ListIdentitySources">ListIdentitySources</a></code> | <code>string</code> | [List] mpa:ListIdentitySources. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.ListPolicies">ListPolicies</a></code> | <code>string</code> | [List] mpa:ListPolicies. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.ListPolicyVersions">ListPolicyVersions</a></code> | <code>string</code> | [List] mpa:ListPolicyVersions. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.ListResourcePolicies">ListResourcePolicies</a></code> | <code>string</code> | [List] mpa:ListResourcePolicies. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.ListSessions">ListSessions</a></code> | <code>string</code> | [List] mpa:ListSessions. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] mpa:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] mpa:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.StartActiveApprovalTeamDeletion">StartActiveApprovalTeamDeletion</a></code> | <code>string</code> | [Write] mpa:StartActiveApprovalTeamDeletion. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.StartApprovalTeamBaseline">StartApprovalTeamBaseline</a></code> | <code>string</code> | [Write] mpa:StartApprovalTeamBaseline. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.StartSession">StartSession</a></code> | <code>string</code> | [Write] mpa:StartSession. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] mpa:TagResource. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] mpa:UntagResource. |
| <code><a href="#@cdk_utils/iam.mpa.MpaActions.property.UpdateApprovalTeam">UpdateApprovalTeam</a></code> | <code>string</code> | [Write] mpa:UpdateApprovalTeam. |

---

##### `actionGetApprovalTeam`<sup>Required</sup> <a name="actionGetApprovalTeam" id="@cdk_utils/iam.mpa.MpaActions.property.actionGetApprovalTeam"></a>

```typescript
public readonly actionGetApprovalTeam: string;
```

- *Type:* string

[Read] mpa:GetApprovalTeam.

---

##### `actionGetIdentitySource`<sup>Required</sup> <a name="actionGetIdentitySource" id="@cdk_utils/iam.mpa.MpaActions.property.actionGetIdentitySource"></a>

```typescript
public readonly actionGetIdentitySource: string;
```

- *Type:* string

[Read] mpa:GetIdentitySource.

---

##### `actionGetPolicyVersion`<sup>Required</sup> <a name="actionGetPolicyVersion" id="@cdk_utils/iam.mpa.MpaActions.property.actionGetPolicyVersion"></a>

```typescript
public readonly actionGetPolicyVersion: string;
```

- *Type:* string

[Read] mpa:GetPolicyVersion.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.mpa.MpaActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] mpa:GetResourcePolicy.

---

##### `actionGetSession`<sup>Required</sup> <a name="actionGetSession" id="@cdk_utils/iam.mpa.MpaActions.property.actionGetSession"></a>

```typescript
public readonly actionGetSession: string;
```

- *Type:* string

[Read] mpa:GetSession.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.mpa.MpaActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.mpa.MpaActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.mpa.MpaActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.mpa.MpaActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.mpa.MpaActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelSession`<sup>Required</sup> <a name="CancelSession" id="@cdk_utils/iam.mpa.MpaActions.property.CancelSession"></a>

```typescript
public readonly CancelSession: string;
```

- *Type:* string

[Write] mpa:CancelSession.

---

##### `CreateApprovalTeam`<sup>Required</sup> <a name="CreateApprovalTeam" id="@cdk_utils/iam.mpa.MpaActions.property.CreateApprovalTeam"></a>

```typescript
public readonly CreateApprovalTeam: string;
```

- *Type:* string

[Write] mpa:CreateApprovalTeam.

---

##### `CreateIdentitySource`<sup>Required</sup> <a name="CreateIdentitySource" id="@cdk_utils/iam.mpa.MpaActions.property.CreateIdentitySource"></a>

```typescript
public readonly CreateIdentitySource: string;
```

- *Type:* string

[Write] mpa:CreateIdentitySource.

---

##### `DeleteIdentitySource`<sup>Required</sup> <a name="DeleteIdentitySource" id="@cdk_utils/iam.mpa.MpaActions.property.DeleteIdentitySource"></a>

```typescript
public readonly DeleteIdentitySource: string;
```

- *Type:* string

[Write] mpa:DeleteIdentitySource.

---

##### `DeleteInactiveApprovalTeamVersion`<sup>Required</sup> <a name="DeleteInactiveApprovalTeamVersion" id="@cdk_utils/iam.mpa.MpaActions.property.DeleteInactiveApprovalTeamVersion"></a>

```typescript
public readonly DeleteInactiveApprovalTeamVersion: string;
```

- *Type:* string

[Write] mpa:DeleteInactiveApprovalTeamVersion.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.mpa.MpaActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] mpa:DeleteResourcePolicy.

---

##### `ListApprovalTeams`<sup>Required</sup> <a name="ListApprovalTeams" id="@cdk_utils/iam.mpa.MpaActions.property.ListApprovalTeams"></a>

```typescript
public readonly ListApprovalTeams: string;
```

- *Type:* string

[List] mpa:ListApprovalTeams.

---

##### `ListIdentitySources`<sup>Required</sup> <a name="ListIdentitySources" id="@cdk_utils/iam.mpa.MpaActions.property.ListIdentitySources"></a>

```typescript
public readonly ListIdentitySources: string;
```

- *Type:* string

[List] mpa:ListIdentitySources.

---

##### `ListPolicies`<sup>Required</sup> <a name="ListPolicies" id="@cdk_utils/iam.mpa.MpaActions.property.ListPolicies"></a>

```typescript
public readonly ListPolicies: string;
```

- *Type:* string

[List] mpa:ListPolicies.

---

##### `ListPolicyVersions`<sup>Required</sup> <a name="ListPolicyVersions" id="@cdk_utils/iam.mpa.MpaActions.property.ListPolicyVersions"></a>

```typescript
public readonly ListPolicyVersions: string;
```

- *Type:* string

[List] mpa:ListPolicyVersions.

---

##### `ListResourcePolicies`<sup>Required</sup> <a name="ListResourcePolicies" id="@cdk_utils/iam.mpa.MpaActions.property.ListResourcePolicies"></a>

```typescript
public readonly ListResourcePolicies: string;
```

- *Type:* string

[List] mpa:ListResourcePolicies.

---

##### `ListSessions`<sup>Required</sup> <a name="ListSessions" id="@cdk_utils/iam.mpa.MpaActions.property.ListSessions"></a>

```typescript
public readonly ListSessions: string;
```

- *Type:* string

[List] mpa:ListSessions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.mpa.MpaActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] mpa:ListTagsForResource.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.mpa.MpaActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] mpa:PutResourcePolicy.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.mpa.MpaActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartActiveApprovalTeamDeletion`<sup>Required</sup> <a name="StartActiveApprovalTeamDeletion" id="@cdk_utils/iam.mpa.MpaActions.property.StartActiveApprovalTeamDeletion"></a>

```typescript
public readonly StartActiveApprovalTeamDeletion: string;
```

- *Type:* string

[Write] mpa:StartActiveApprovalTeamDeletion.

---

##### `StartApprovalTeamBaseline`<sup>Required</sup> <a name="StartApprovalTeamBaseline" id="@cdk_utils/iam.mpa.MpaActions.property.StartApprovalTeamBaseline"></a>

```typescript
public readonly StartApprovalTeamBaseline: string;
```

- *Type:* string

[Write] mpa:StartApprovalTeamBaseline.

---

##### `StartSession`<sup>Required</sup> <a name="StartSession" id="@cdk_utils/iam.mpa.MpaActions.property.StartSession"></a>

```typescript
public readonly StartSession: string;
```

- *Type:* string

[Write] mpa:StartSession.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.mpa.MpaActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] mpa:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.mpa.MpaActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] mpa:UntagResource.

---

##### `UpdateApprovalTeam`<sup>Required</sup> <a name="UpdateApprovalTeam" id="@cdk_utils/iam.mpa.MpaActions.property.UpdateApprovalTeam"></a>

```typescript
public readonly UpdateApprovalTeam: string;
```

- *Type:* string

[Write] mpa:UpdateApprovalTeam.

---

### MpaConditions <a name="MpaConditions" id="@cdk_utils/iam.mpa.MpaConditions"></a>

Condition key constants and builders for mpa.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mpa.MpaConditions.Initializer"></a>

```typescript
import { mpa } from '@cdk_utils/iam'

new mpa.MpaConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.mpa.MpaConditions.protectedResourceAccount">protectedResourceAccount</a></code> | Generates a condition block for `mpa:ProtectedResourceAccount`. |
| <code><a href="#@cdk_utils/iam.mpa.MpaConditions.requestedOperation">requestedOperation</a></code> | Generates a condition block for `mpa:RequestedOperation`. |
| <code><a href="#@cdk_utils/iam.mpa.MpaConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.mpa.MpaConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.mpa.MpaConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `protectedResourceAccount` <a name="protectedResourceAccount" id="@cdk_utils/iam.mpa.MpaConditions.protectedResourceAccount"></a>

```typescript
import { mpa } from '@cdk_utils/iam'

mpa.MpaConditions.protectedResourceAccount(value: string)
```

Generates a condition block for `mpa:ProtectedResourceAccount`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mpa.MpaConditions.protectedResourceAccount.parameter.value"></a>

- *Type:* string

---

##### `requestedOperation` <a name="requestedOperation" id="@cdk_utils/iam.mpa.MpaConditions.requestedOperation"></a>

```typescript
import { mpa } from '@cdk_utils/iam'

mpa.MpaConditions.requestedOperation(value: string)
```

Generates a condition block for `mpa:RequestedOperation`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mpa.MpaConditions.requestedOperation.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.mpa.MpaConditions.requestTag"></a>

```typescript
import { mpa } from '@cdk_utils/iam'

mpa.MpaConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mpa.MpaConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.mpa.MpaConditions.resourceTag"></a>

```typescript
import { mpa } from '@cdk_utils/iam'

mpa.MpaConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mpa.MpaConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.mpa.MpaConditions.tagKeys"></a>

```typescript
import { mpa } from '@cdk_utils/iam'

mpa.MpaConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.mpa.MpaConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mpa.MpaConditions.property.actionGetApprovalTeamConditionKeys">actionGetApprovalTeamConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetApprovalTeam action. |
| <code><a href="#@cdk_utils/iam.mpa.MpaConditions.property.actionGetIdentitySourceConditionKeys">actionGetIdentitySourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetIdentitySource action. |
| <code><a href="#@cdk_utils/iam.mpa.MpaConditions.property.actionGetSessionConditionKeys">actionGetSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSession action. |
| <code><a href="#@cdk_utils/iam.mpa.MpaConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.mpa.MpaConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.mpa.MpaConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.mpa.MpaConditions.property.CancelSessionConditionKeys">CancelSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CancelSession action. |
| <code><a href="#@cdk_utils/iam.mpa.MpaConditions.property.CreateApprovalTeamConditionKeys">CreateApprovalTeamConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApprovalTeam action. |
| <code><a href="#@cdk_utils/iam.mpa.MpaConditions.property.CreateIdentitySourceConditionKeys">CreateIdentitySourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIdentitySource action. |
| <code><a href="#@cdk_utils/iam.mpa.MpaConditions.property.DeleteIdentitySourceConditionKeys">DeleteIdentitySourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteIdentitySource action. |
| <code><a href="#@cdk_utils/iam.mpa.MpaConditions.property.DeleteInactiveApprovalTeamVersionConditionKeys">DeleteInactiveApprovalTeamVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteInactiveApprovalTeamVersion action. |
| <code><a href="#@cdk_utils/iam.mpa.MpaConditions.property.PROTECTED_RESOURCE_ACCOUNT">PROTECTED_RESOURCE_ACCOUNT</a></code> | <code>string</code> | Condition key: mpa:ProtectedResourceAccount (String). |
| <code><a href="#@cdk_utils/iam.mpa.MpaConditions.property.REQUESTED_OPERATION">REQUESTED_OPERATION</a></code> | <code>string</code> | Condition key: mpa:RequestedOperation (String). |
| <code><a href="#@cdk_utils/iam.mpa.MpaConditions.property.StartActiveApprovalTeamDeletionConditionKeys">StartActiveApprovalTeamDeletionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartActiveApprovalTeamDeletion action. |
| <code><a href="#@cdk_utils/iam.mpa.MpaConditions.property.StartApprovalTeamBaselineConditionKeys">StartApprovalTeamBaselineConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartApprovalTeamBaseline action. |
| <code><a href="#@cdk_utils/iam.mpa.MpaConditions.property.StartSessionConditionKeys">StartSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartSession action. |
| <code><a href="#@cdk_utils/iam.mpa.MpaConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.mpa.MpaConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.mpa.MpaConditions.property.UpdateApprovalTeamConditionKeys">UpdateApprovalTeamConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateApprovalTeam action. |

---

##### `actionGetApprovalTeamConditionKeys`<sup>Required</sup> <a name="actionGetApprovalTeamConditionKeys" id="@cdk_utils/iam.mpa.MpaConditions.property.actionGetApprovalTeamConditionKeys"></a>

```typescript
public readonly actionGetApprovalTeamConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetApprovalTeam action.

---

##### `actionGetIdentitySourceConditionKeys`<sup>Required</sup> <a name="actionGetIdentitySourceConditionKeys" id="@cdk_utils/iam.mpa.MpaConditions.property.actionGetIdentitySourceConditionKeys"></a>

```typescript
public readonly actionGetIdentitySourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetIdentitySource action.

---

##### `actionGetSessionConditionKeys`<sup>Required</sup> <a name="actionGetSessionConditionKeys" id="@cdk_utils/iam.mpa.MpaConditions.property.actionGetSessionConditionKeys"></a>

```typescript
public readonly actionGetSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSession action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.mpa.MpaConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.mpa.MpaConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.mpa.MpaConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CancelSessionConditionKeys`<sup>Required</sup> <a name="CancelSessionConditionKeys" id="@cdk_utils/iam.mpa.MpaConditions.property.CancelSessionConditionKeys"></a>

```typescript
public readonly CancelSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CancelSession action.

---

##### `CreateApprovalTeamConditionKeys`<sup>Required</sup> <a name="CreateApprovalTeamConditionKeys" id="@cdk_utils/iam.mpa.MpaConditions.property.CreateApprovalTeamConditionKeys"></a>

```typescript
public readonly CreateApprovalTeamConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApprovalTeam action.

---

##### `CreateIdentitySourceConditionKeys`<sup>Required</sup> <a name="CreateIdentitySourceConditionKeys" id="@cdk_utils/iam.mpa.MpaConditions.property.CreateIdentitySourceConditionKeys"></a>

```typescript
public readonly CreateIdentitySourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIdentitySource action.

---

##### `DeleteIdentitySourceConditionKeys`<sup>Required</sup> <a name="DeleteIdentitySourceConditionKeys" id="@cdk_utils/iam.mpa.MpaConditions.property.DeleteIdentitySourceConditionKeys"></a>

```typescript
public readonly DeleteIdentitySourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteIdentitySource action.

---

##### `DeleteInactiveApprovalTeamVersionConditionKeys`<sup>Required</sup> <a name="DeleteInactiveApprovalTeamVersionConditionKeys" id="@cdk_utils/iam.mpa.MpaConditions.property.DeleteInactiveApprovalTeamVersionConditionKeys"></a>

```typescript
public readonly DeleteInactiveApprovalTeamVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteInactiveApprovalTeamVersion action.

---

##### `PROTECTED_RESOURCE_ACCOUNT`<sup>Required</sup> <a name="PROTECTED_RESOURCE_ACCOUNT" id="@cdk_utils/iam.mpa.MpaConditions.property.PROTECTED_RESOURCE_ACCOUNT"></a>

```typescript
public readonly PROTECTED_RESOURCE_ACCOUNT: string;
```

- *Type:* string

Condition key: mpa:ProtectedResourceAccount (String).

---

##### `REQUESTED_OPERATION`<sup>Required</sup> <a name="REQUESTED_OPERATION" id="@cdk_utils/iam.mpa.MpaConditions.property.REQUESTED_OPERATION"></a>

```typescript
public readonly REQUESTED_OPERATION: string;
```

- *Type:* string

Condition key: mpa:RequestedOperation (String).

---

##### `StartActiveApprovalTeamDeletionConditionKeys`<sup>Required</sup> <a name="StartActiveApprovalTeamDeletionConditionKeys" id="@cdk_utils/iam.mpa.MpaConditions.property.StartActiveApprovalTeamDeletionConditionKeys"></a>

```typescript
public readonly StartActiveApprovalTeamDeletionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartActiveApprovalTeamDeletion action.

---

##### `StartApprovalTeamBaselineConditionKeys`<sup>Required</sup> <a name="StartApprovalTeamBaselineConditionKeys" id="@cdk_utils/iam.mpa.MpaConditions.property.StartApprovalTeamBaselineConditionKeys"></a>

```typescript
public readonly StartApprovalTeamBaselineConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartApprovalTeamBaseline action.

---

##### `StartSessionConditionKeys`<sup>Required</sup> <a name="StartSessionConditionKeys" id="@cdk_utils/iam.mpa.MpaConditions.property.StartSessionConditionKeys"></a>

```typescript
public readonly StartSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartSession action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.mpa.MpaConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.mpa.MpaConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateApprovalTeamConditionKeys`<sup>Required</sup> <a name="UpdateApprovalTeamConditionKeys" id="@cdk_utils/iam.mpa.MpaConditions.property.UpdateApprovalTeamConditionKeys"></a>

```typescript
public readonly UpdateApprovalTeamConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateApprovalTeam action.

---

### MpaOperations <a name="MpaOperations" id="@cdk_utils/iam.mpa.MpaOperations"></a>

API operation to required IAM actions mapping for mpa.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mpa.MpaOperations.Initializer"></a>

```typescript
import { mpa } from '@cdk_utils/iam'

new mpa.MpaOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mpa.MpaOperations.property.CancelSession">CancelSession</a></code> | <code>string[]</code> | IAM actions required for the CancelSession API call. |
| <code><a href="#@cdk_utils/iam.mpa.MpaOperations.property.CreateApprovalTeam">CreateApprovalTeam</a></code> | <code>string[]</code> | IAM actions required for the CreateApprovalTeam API call. |
| <code><a href="#@cdk_utils/iam.mpa.MpaOperations.property.CreateIdentitySource">CreateIdentitySource</a></code> | <code>string[]</code> | IAM actions required for the CreateIdentitySource API call. |
| <code><a href="#@cdk_utils/iam.mpa.MpaOperations.property.DeleteIdentitySource">DeleteIdentitySource</a></code> | <code>string[]</code> | IAM actions required for the DeleteIdentitySource API call. |
| <code><a href="#@cdk_utils/iam.mpa.MpaOperations.property.DeleteInactiveApprovalTeamVersion">DeleteInactiveApprovalTeamVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteInactiveApprovalTeamVersion API call. |
| <code><a href="#@cdk_utils/iam.mpa.MpaOperations.property.ListApprovalTeams">ListApprovalTeams</a></code> | <code>string[]</code> | IAM actions required for the ListApprovalTeams API call. |
| <code><a href="#@cdk_utils/iam.mpa.MpaOperations.property.ListIdentitySources">ListIdentitySources</a></code> | <code>string[]</code> | IAM actions required for the ListIdentitySources API call. |
| <code><a href="#@cdk_utils/iam.mpa.MpaOperations.property.ListPolicies">ListPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListPolicies API call. |
| <code><a href="#@cdk_utils/iam.mpa.MpaOperations.property.ListPolicyVersions">ListPolicyVersions</a></code> | <code>string[]</code> | IAM actions required for the ListPolicyVersions API call. |
| <code><a href="#@cdk_utils/iam.mpa.MpaOperations.property.ListResourcePolicies">ListResourcePolicies</a></code> | <code>string[]</code> | IAM actions required for the ListResourcePolicies API call. |
| <code><a href="#@cdk_utils/iam.mpa.MpaOperations.property.ListSessions">ListSessions</a></code> | <code>string[]</code> | IAM actions required for the ListSessions API call. |
| <code><a href="#@cdk_utils/iam.mpa.MpaOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.mpa.MpaOperations.property.opGetApprovalTeam">opGetApprovalTeam</a></code> | <code>string[]</code> | IAM actions required for the GetApprovalTeam API call. |
| <code><a href="#@cdk_utils/iam.mpa.MpaOperations.property.opGetIdentitySource">opGetIdentitySource</a></code> | <code>string[]</code> | IAM actions required for the GetIdentitySource API call. |
| <code><a href="#@cdk_utils/iam.mpa.MpaOperations.property.opGetPolicyVersion">opGetPolicyVersion</a></code> | <code>string[]</code> | IAM actions required for the GetPolicyVersion API call. |
| <code><a href="#@cdk_utils/iam.mpa.MpaOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.mpa.MpaOperations.property.opGetSession">opGetSession</a></code> | <code>string[]</code> | IAM actions required for the GetSession API call. |
| <code><a href="#@cdk_utils/iam.mpa.MpaOperations.property.StartActiveApprovalTeamDeletion">StartActiveApprovalTeamDeletion</a></code> | <code>string[]</code> | IAM actions required for the StartActiveApprovalTeamDeletion API call. |
| <code><a href="#@cdk_utils/iam.mpa.MpaOperations.property.StartApprovalTeamBaseline">StartApprovalTeamBaseline</a></code> | <code>string[]</code> | IAM actions required for the StartApprovalTeamBaseline API call. |
| <code><a href="#@cdk_utils/iam.mpa.MpaOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.mpa.MpaOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.mpa.MpaOperations.property.UpdateApprovalTeam">UpdateApprovalTeam</a></code> | <code>string[]</code> | IAM actions required for the UpdateApprovalTeam API call. |

---

##### `CancelSession`<sup>Required</sup> <a name="CancelSession" id="@cdk_utils/iam.mpa.MpaOperations.property.CancelSession"></a>

```typescript
public readonly CancelSession: string[];
```

- *Type:* string[]

IAM actions required for the CancelSession API call.

---

##### `CreateApprovalTeam`<sup>Required</sup> <a name="CreateApprovalTeam" id="@cdk_utils/iam.mpa.MpaOperations.property.CreateApprovalTeam"></a>

```typescript
public readonly CreateApprovalTeam: string[];
```

- *Type:* string[]

IAM actions required for the CreateApprovalTeam API call.

---

##### `CreateIdentitySource`<sup>Required</sup> <a name="CreateIdentitySource" id="@cdk_utils/iam.mpa.MpaOperations.property.CreateIdentitySource"></a>

```typescript
public readonly CreateIdentitySource: string[];
```

- *Type:* string[]

IAM actions required for the CreateIdentitySource API call.

---

##### `DeleteIdentitySource`<sup>Required</sup> <a name="DeleteIdentitySource" id="@cdk_utils/iam.mpa.MpaOperations.property.DeleteIdentitySource"></a>

```typescript
public readonly DeleteIdentitySource: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIdentitySource API call.

---

##### `DeleteInactiveApprovalTeamVersion`<sup>Required</sup> <a name="DeleteInactiveApprovalTeamVersion" id="@cdk_utils/iam.mpa.MpaOperations.property.DeleteInactiveApprovalTeamVersion"></a>

```typescript
public readonly DeleteInactiveApprovalTeamVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInactiveApprovalTeamVersion API call.

---

##### `ListApprovalTeams`<sup>Required</sup> <a name="ListApprovalTeams" id="@cdk_utils/iam.mpa.MpaOperations.property.ListApprovalTeams"></a>

```typescript
public readonly ListApprovalTeams: string[];
```

- *Type:* string[]

IAM actions required for the ListApprovalTeams API call.

---

##### `ListIdentitySources`<sup>Required</sup> <a name="ListIdentitySources" id="@cdk_utils/iam.mpa.MpaOperations.property.ListIdentitySources"></a>

```typescript
public readonly ListIdentitySources: string[];
```

- *Type:* string[]

IAM actions required for the ListIdentitySources API call.

---

##### `ListPolicies`<sup>Required</sup> <a name="ListPolicies" id="@cdk_utils/iam.mpa.MpaOperations.property.ListPolicies"></a>

```typescript
public readonly ListPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListPolicies API call.

---

##### `ListPolicyVersions`<sup>Required</sup> <a name="ListPolicyVersions" id="@cdk_utils/iam.mpa.MpaOperations.property.ListPolicyVersions"></a>

```typescript
public readonly ListPolicyVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListPolicyVersions API call.

---

##### `ListResourcePolicies`<sup>Required</sup> <a name="ListResourcePolicies" id="@cdk_utils/iam.mpa.MpaOperations.property.ListResourcePolicies"></a>

```typescript
public readonly ListResourcePolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListResourcePolicies API call.

---

##### `ListSessions`<sup>Required</sup> <a name="ListSessions" id="@cdk_utils/iam.mpa.MpaOperations.property.ListSessions"></a>

```typescript
public readonly ListSessions: string[];
```

- *Type:* string[]

IAM actions required for the ListSessions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.mpa.MpaOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetApprovalTeam`<sup>Required</sup> <a name="opGetApprovalTeam" id="@cdk_utils/iam.mpa.MpaOperations.property.opGetApprovalTeam"></a>

```typescript
public readonly opGetApprovalTeam: string[];
```

- *Type:* string[]

IAM actions required for the GetApprovalTeam API call.

---

##### `opGetIdentitySource`<sup>Required</sup> <a name="opGetIdentitySource" id="@cdk_utils/iam.mpa.MpaOperations.property.opGetIdentitySource"></a>

```typescript
public readonly opGetIdentitySource: string[];
```

- *Type:* string[]

IAM actions required for the GetIdentitySource API call.

---

##### `opGetPolicyVersion`<sup>Required</sup> <a name="opGetPolicyVersion" id="@cdk_utils/iam.mpa.MpaOperations.property.opGetPolicyVersion"></a>

```typescript
public readonly opGetPolicyVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetPolicyVersion API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.mpa.MpaOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `opGetSession`<sup>Required</sup> <a name="opGetSession" id="@cdk_utils/iam.mpa.MpaOperations.property.opGetSession"></a>

```typescript
public readonly opGetSession: string[];
```

- *Type:* string[]

IAM actions required for the GetSession API call.

---

##### `StartActiveApprovalTeamDeletion`<sup>Required</sup> <a name="StartActiveApprovalTeamDeletion" id="@cdk_utils/iam.mpa.MpaOperations.property.StartActiveApprovalTeamDeletion"></a>

```typescript
public readonly StartActiveApprovalTeamDeletion: string[];
```

- *Type:* string[]

IAM actions required for the StartActiveApprovalTeamDeletion API call.

---

##### `StartApprovalTeamBaseline`<sup>Required</sup> <a name="StartApprovalTeamBaseline" id="@cdk_utils/iam.mpa.MpaOperations.property.StartApprovalTeamBaseline"></a>

```typescript
public readonly StartApprovalTeamBaseline: string[];
```

- *Type:* string[]

IAM actions required for the StartApprovalTeamBaseline API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.mpa.MpaOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.mpa.MpaOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateApprovalTeam`<sup>Required</sup> <a name="UpdateApprovalTeam" id="@cdk_utils/iam.mpa.MpaOperations.property.UpdateApprovalTeam"></a>

```typescript
public readonly UpdateApprovalTeam: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApprovalTeam API call.

---

### MpaResources <a name="MpaResources" id="@cdk_utils/iam.mpa.MpaResources"></a>

ARN builders, validators, and parsers for mpa resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mpa.MpaResources.Initializer"></a>

```typescript
import { mpa } from '@cdk_utils/iam'

new mpa.MpaResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.mpa.MpaResources.approvalTeam">approvalTeam</a></code> | Builds an ARN for the approval-team resource. |
| <code><a href="#@cdk_utils/iam.mpa.MpaResources.identitySource">identitySource</a></code> | Builds an ARN for the identity-source resource. |
| <code><a href="#@cdk_utils/iam.mpa.MpaResources.isValidApprovalTeamArn">isValidApprovalTeamArn</a></code> | Validates whether a string is a valid ARN for the approval-team resource. |
| <code><a href="#@cdk_utils/iam.mpa.MpaResources.isValidIdentitySourceArn">isValidIdentitySourceArn</a></code> | Validates whether a string is a valid ARN for the identity-source resource. |
| <code><a href="#@cdk_utils/iam.mpa.MpaResources.isValidSessionArn">isValidSessionArn</a></code> | Validates whether a string is a valid ARN for the session resource. |
| <code><a href="#@cdk_utils/iam.mpa.MpaResources.parseApprovalTeamArn">parseApprovalTeamArn</a></code> | Parses a approval-team ARN into its components. |
| <code><a href="#@cdk_utils/iam.mpa.MpaResources.parseIdentitySourceArn">parseIdentitySourceArn</a></code> | Parses a identity-source ARN into its components. |
| <code><a href="#@cdk_utils/iam.mpa.MpaResources.parseSessionArn">parseSessionArn</a></code> | Parses a session ARN into its components. |
| <code><a href="#@cdk_utils/iam.mpa.MpaResources.session">session</a></code> | Builds an ARN for the session resource. |

---

##### `approvalTeam` <a name="approvalTeam" id="@cdk_utils/iam.mpa.MpaResources.approvalTeam"></a>

```typescript
import { mpa } from '@cdk_utils/iam'

mpa.MpaResources.approvalTeam(props: MpaApprovalTeamArnProps)
```

Builds an ARN for the approval-team resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mpa.MpaResources.approvalTeam.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mpa.MpaApprovalTeamArnProps">MpaApprovalTeamArnProps</a>

---

##### `identitySource` <a name="identitySource" id="@cdk_utils/iam.mpa.MpaResources.identitySource"></a>

```typescript
import { mpa } from '@cdk_utils/iam'

mpa.MpaResources.identitySource(props: MpaIdentitySourceArnProps)
```

Builds an ARN for the identity-source resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mpa.MpaResources.identitySource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mpa.MpaIdentitySourceArnProps">MpaIdentitySourceArnProps</a>

---

##### `isValidApprovalTeamArn` <a name="isValidApprovalTeamArn" id="@cdk_utils/iam.mpa.MpaResources.isValidApprovalTeamArn"></a>

```typescript
import { mpa } from '@cdk_utils/iam'

mpa.MpaResources.isValidApprovalTeamArn(arn: string)
```

Validates whether a string is a valid ARN for the approval-team resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mpa.MpaResources.isValidApprovalTeamArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIdentitySourceArn` <a name="isValidIdentitySourceArn" id="@cdk_utils/iam.mpa.MpaResources.isValidIdentitySourceArn"></a>

```typescript
import { mpa } from '@cdk_utils/iam'

mpa.MpaResources.isValidIdentitySourceArn(arn: string)
```

Validates whether a string is a valid ARN for the identity-source resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mpa.MpaResources.isValidIdentitySourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSessionArn` <a name="isValidSessionArn" id="@cdk_utils/iam.mpa.MpaResources.isValidSessionArn"></a>

```typescript
import { mpa } from '@cdk_utils/iam'

mpa.MpaResources.isValidSessionArn(arn: string)
```

Validates whether a string is a valid ARN for the session resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mpa.MpaResources.isValidSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApprovalTeamArn` <a name="parseApprovalTeamArn" id="@cdk_utils/iam.mpa.MpaResources.parseApprovalTeamArn"></a>

```typescript
import { mpa } from '@cdk_utils/iam'

mpa.MpaResources.parseApprovalTeamArn(arn: string)
```

Parses a approval-team ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mpa.MpaResources.parseApprovalTeamArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIdentitySourceArn` <a name="parseIdentitySourceArn" id="@cdk_utils/iam.mpa.MpaResources.parseIdentitySourceArn"></a>

```typescript
import { mpa } from '@cdk_utils/iam'

mpa.MpaResources.parseIdentitySourceArn(arn: string)
```

Parses a identity-source ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mpa.MpaResources.parseIdentitySourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSessionArn` <a name="parseSessionArn" id="@cdk_utils/iam.mpa.MpaResources.parseSessionArn"></a>

```typescript
import { mpa } from '@cdk_utils/iam'

mpa.MpaResources.parseSessionArn(arn: string)
```

Parses a session ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mpa.MpaResources.parseSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `session` <a name="session" id="@cdk_utils/iam.mpa.MpaResources.session"></a>

```typescript
import { mpa } from '@cdk_utils/iam'

mpa.MpaResources.session(props: MpaSessionArnProps)
```

Builds an ARN for the session resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mpa.MpaResources.session.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mpa.MpaSessionArnProps">MpaSessionArnProps</a>

---




