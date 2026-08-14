# `gameliftstreams` Submodule <a name="`gameliftstreams` Submodule" id="@cdk_utils/iam.gameliftstreams"></a>


## Structs <a name="Structs" id="Structs"></a>

### GameliftstreamsApplicationArnComponents <a name="GameliftstreamsApplicationArnComponents" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsApplicationArnComponents"></a>

Parsed components of a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsApplicationArnComponents.Initializer"></a>

```typescript
import { gameliftstreams } from '@cdk_utils/iam'

const gameliftstreamsApplicationArnComponents: gameliftstreams.GameliftstreamsApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsApplicationArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsApplicationArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GameliftstreamsApplicationArnProps <a name="GameliftstreamsApplicationArnProps" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsApplicationArnProps"></a>

Properties for building a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsApplicationArnProps.Initializer"></a>

```typescript
import { gameliftstreams } from '@cdk_utils/iam'

const gameliftstreamsApplicationArnProps: gameliftstreams.GameliftstreamsApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsApplicationArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsApplicationArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GameliftstreamsStreamGroupArnComponents <a name="GameliftstreamsStreamGroupArnComponents" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsStreamGroupArnComponents"></a>

Parsed components of a stream group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsStreamGroupArnComponents.Initializer"></a>

```typescript
import { gameliftstreams } from '@cdk_utils/iam'

const gameliftstreamsStreamGroupArnComponents: gameliftstreams.GameliftstreamsStreamGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsStreamGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsStreamGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsStreamGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsStreamGroupArnComponents.property.streamGroupId">streamGroupId</a></code> | <code>string</code> | The StreamGroupId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsStreamGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsStreamGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsStreamGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `streamGroupId`<sup>Required</sup> <a name="streamGroupId" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsStreamGroupArnComponents.property.streamGroupId"></a>

```typescript
public readonly streamGroupId: string;
```

- *Type:* string

The StreamGroupId component.

---

### GameliftstreamsStreamGroupArnProps <a name="GameliftstreamsStreamGroupArnProps" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsStreamGroupArnProps"></a>

Properties for building a stream group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsStreamGroupArnProps.Initializer"></a>

```typescript
import { gameliftstreams } from '@cdk_utils/iam'

const gameliftstreamsStreamGroupArnProps: gameliftstreams.GameliftstreamsStreamGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsStreamGroupArnProps.property.streamGroupId">streamGroupId</a></code> | <code>string</code> | The StreamGroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsStreamGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsStreamGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsStreamGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `streamGroupId`<sup>Required</sup> <a name="streamGroupId" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsStreamGroupArnProps.property.streamGroupId"></a>

```typescript
public readonly streamGroupId: string;
```

- *Type:* string

The StreamGroupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsStreamGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsStreamGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsStreamGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftstreamsActions <a name="GameliftstreamsActions" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions"></a>

IAM action constants for the gameliftstreams service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.Initializer"></a>

```typescript
import { gameliftstreams } from '@cdk_utils/iam'

new gameliftstreams.GameliftstreamsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.actionGetApplication">actionGetApplication</a></code> | <code>string</code> | [Read] gameliftstreams:GetApplication. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.actionGetStreamGroup">actionGetStreamGroup</a></code> | <code>string</code> | [Read] gameliftstreams:GetStreamGroup. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.actionGetStreamSession">actionGetStreamSession</a></code> | <code>string</code> | [Read] gameliftstreams:GetStreamSession. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.actionGetStreamUrl">actionGetStreamUrl</a></code> | <code>string</code> | [Read] gameliftstreams:GetStreamUrl. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.AddStreamGroupLocations">AddStreamGroupLocations</a></code> | <code>string</code> | [Write] gameliftstreams:AddStreamGroupLocations. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.AssociateApplications">AssociateApplications</a></code> | <code>string</code> | [Write] gameliftstreams:AssociateApplications. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.CreateApplication">CreateApplication</a></code> | <code>string</code> | [Write] gameliftstreams:CreateApplication. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.CreateStreamGroup">CreateStreamGroup</a></code> | <code>string</code> | [Write] gameliftstreams:CreateStreamGroup. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.CreateStreamSessionAdminShell">CreateStreamSessionAdminShell</a></code> | <code>string</code> | [Write] gameliftstreams:CreateStreamSessionAdminShell. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.CreateStreamSessionConnection">CreateStreamSessionConnection</a></code> | <code>string</code> | [Write] gameliftstreams:CreateStreamSessionConnection. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.CreateStreamUrl">CreateStreamUrl</a></code> | <code>string</code> | [Write] gameliftstreams:CreateStreamUrl. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.DeleteApplication">DeleteApplication</a></code> | <code>string</code> | [Write] gameliftstreams:DeleteApplication. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.DeleteStreamGroup">DeleteStreamGroup</a></code> | <code>string</code> | [Write] gameliftstreams:DeleteStreamGroup. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.DisassociateApplications">DisassociateApplications</a></code> | <code>string</code> | [Write] gameliftstreams:DisassociateApplications. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.ExportStreamSessionFiles">ExportStreamSessionFiles</a></code> | <code>string</code> | [Write] gameliftstreams:ExportStreamSessionFiles. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.ListApplications">ListApplications</a></code> | <code>string</code> | [List] gameliftstreams:ListApplications. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.ListApplicationShaderCaches">ListApplicationShaderCaches</a></code> | <code>string</code> | [List] gameliftstreams:ListApplicationShaderCaches. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.ListStreamGroups">ListStreamGroups</a></code> | <code>string</code> | [List] gameliftstreams:ListStreamGroups. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.ListStreamSessions">ListStreamSessions</a></code> | <code>string</code> | [Read] gameliftstreams:ListStreamSessions. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.ListStreamSessionsByAccount">ListStreamSessionsByAccount</a></code> | <code>string</code> | [Read] gameliftstreams:ListStreamSessionsByAccount. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.ListStreamUrls">ListStreamUrls</a></code> | <code>string</code> | [List] gameliftstreams:ListStreamUrls. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] gameliftstreams:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.RemoveStreamGroupLocations">RemoveStreamGroupLocations</a></code> | <code>string</code> | [Write] gameliftstreams:RemoveStreamGroupLocations. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.RevokeStreamUrl">RevokeStreamUrl</a></code> | <code>string</code> | [Write] gameliftstreams:RevokeStreamUrl. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.StartStreamSession">StartStreamSession</a></code> | <code>string</code> | [Write] gameliftstreams:StartStreamSession. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] gameliftstreams:TagResource. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.TerminateStreamSession">TerminateStreamSession</a></code> | <code>string</code> | [Write] gameliftstreams:TerminateStreamSession. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] gameliftstreams:UntagResource. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.UpdateApplication">UpdateApplication</a></code> | <code>string</code> | [Write] gameliftstreams:UpdateApplication. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.UpdateStreamGroup">UpdateStreamGroup</a></code> | <code>string</code> | [Write] gameliftstreams:UpdateStreamGroup. |

---

##### `actionGetApplication`<sup>Required</sup> <a name="actionGetApplication" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.actionGetApplication"></a>

```typescript
public readonly actionGetApplication: string;
```

- *Type:* string

[Read] gameliftstreams:GetApplication.

---

##### `actionGetStreamGroup`<sup>Required</sup> <a name="actionGetStreamGroup" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.actionGetStreamGroup"></a>

```typescript
public readonly actionGetStreamGroup: string;
```

- *Type:* string

[Read] gameliftstreams:GetStreamGroup.

---

##### `actionGetStreamSession`<sup>Required</sup> <a name="actionGetStreamSession" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.actionGetStreamSession"></a>

```typescript
public readonly actionGetStreamSession: string;
```

- *Type:* string

[Read] gameliftstreams:GetStreamSession.

---

##### `actionGetStreamUrl`<sup>Required</sup> <a name="actionGetStreamUrl" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.actionGetStreamUrl"></a>

```typescript
public readonly actionGetStreamUrl: string;
```

- *Type:* string

[Read] gameliftstreams:GetStreamUrl.

---

##### `AddStreamGroupLocations`<sup>Required</sup> <a name="AddStreamGroupLocations" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.AddStreamGroupLocations"></a>

```typescript
public readonly AddStreamGroupLocations: string;
```

- *Type:* string

[Write] gameliftstreams:AddStreamGroupLocations.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateApplications`<sup>Required</sup> <a name="AssociateApplications" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.AssociateApplications"></a>

```typescript
public readonly AssociateApplications: string;
```

- *Type:* string

[Write] gameliftstreams:AssociateApplications.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string;
```

- *Type:* string

[Write] gameliftstreams:CreateApplication.

---

##### `CreateStreamGroup`<sup>Required</sup> <a name="CreateStreamGroup" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.CreateStreamGroup"></a>

```typescript
public readonly CreateStreamGroup: string;
```

- *Type:* string

[Write] gameliftstreams:CreateStreamGroup.

---

##### `CreateStreamSessionAdminShell`<sup>Required</sup> <a name="CreateStreamSessionAdminShell" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.CreateStreamSessionAdminShell"></a>

```typescript
public readonly CreateStreamSessionAdminShell: string;
```

- *Type:* string

[Write] gameliftstreams:CreateStreamSessionAdminShell.

---

##### `CreateStreamSessionConnection`<sup>Required</sup> <a name="CreateStreamSessionConnection" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.CreateStreamSessionConnection"></a>

```typescript
public readonly CreateStreamSessionConnection: string;
```

- *Type:* string

[Write] gameliftstreams:CreateStreamSessionConnection.

---

##### `CreateStreamUrl`<sup>Required</sup> <a name="CreateStreamUrl" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.CreateStreamUrl"></a>

```typescript
public readonly CreateStreamUrl: string;
```

- *Type:* string

[Write] gameliftstreams:CreateStreamUrl.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string;
```

- *Type:* string

[Write] gameliftstreams:DeleteApplication.

---

##### `DeleteStreamGroup`<sup>Required</sup> <a name="DeleteStreamGroup" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.DeleteStreamGroup"></a>

```typescript
public readonly DeleteStreamGroup: string;
```

- *Type:* string

[Write] gameliftstreams:DeleteStreamGroup.

---

##### `DisassociateApplications`<sup>Required</sup> <a name="DisassociateApplications" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.DisassociateApplications"></a>

```typescript
public readonly DisassociateApplications: string;
```

- *Type:* string

[Write] gameliftstreams:DisassociateApplications.

---

##### `ExportStreamSessionFiles`<sup>Required</sup> <a name="ExportStreamSessionFiles" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.ExportStreamSessionFiles"></a>

```typescript
public readonly ExportStreamSessionFiles: string;
```

- *Type:* string

[Write] gameliftstreams:ExportStreamSessionFiles.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.ListApplications"></a>

```typescript
public readonly ListApplications: string;
```

- *Type:* string

[List] gameliftstreams:ListApplications.

---

##### `ListApplicationShaderCaches`<sup>Required</sup> <a name="ListApplicationShaderCaches" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.ListApplicationShaderCaches"></a>

```typescript
public readonly ListApplicationShaderCaches: string;
```

- *Type:* string

[List] gameliftstreams:ListApplicationShaderCaches.

---

##### `ListStreamGroups`<sup>Required</sup> <a name="ListStreamGroups" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.ListStreamGroups"></a>

```typescript
public readonly ListStreamGroups: string;
```

- *Type:* string

[List] gameliftstreams:ListStreamGroups.

---

##### `ListStreamSessions`<sup>Required</sup> <a name="ListStreamSessions" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.ListStreamSessions"></a>

```typescript
public readonly ListStreamSessions: string;
```

- *Type:* string

[Read] gameliftstreams:ListStreamSessions.

---

##### `ListStreamSessionsByAccount`<sup>Required</sup> <a name="ListStreamSessionsByAccount" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.ListStreamSessionsByAccount"></a>

```typescript
public readonly ListStreamSessionsByAccount: string;
```

- *Type:* string

[Read] gameliftstreams:ListStreamSessionsByAccount.

---

##### `ListStreamUrls`<sup>Required</sup> <a name="ListStreamUrls" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.ListStreamUrls"></a>

```typescript
public readonly ListStreamUrls: string;
```

- *Type:* string

[List] gameliftstreams:ListStreamUrls.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] gameliftstreams:ListTagsForResource.

---

##### `RemoveStreamGroupLocations`<sup>Required</sup> <a name="RemoveStreamGroupLocations" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.RemoveStreamGroupLocations"></a>

```typescript
public readonly RemoveStreamGroupLocations: string;
```

- *Type:* string

[Write] gameliftstreams:RemoveStreamGroupLocations.

---

##### `RevokeStreamUrl`<sup>Required</sup> <a name="RevokeStreamUrl" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.RevokeStreamUrl"></a>

```typescript
public readonly RevokeStreamUrl: string;
```

- *Type:* string

[Write] gameliftstreams:RevokeStreamUrl.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartStreamSession`<sup>Required</sup> <a name="StartStreamSession" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.StartStreamSession"></a>

```typescript
public readonly StartStreamSession: string;
```

- *Type:* string

[Write] gameliftstreams:StartStreamSession.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] gameliftstreams:TagResource.

---

##### `TerminateStreamSession`<sup>Required</sup> <a name="TerminateStreamSession" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.TerminateStreamSession"></a>

```typescript
public readonly TerminateStreamSession: string;
```

- *Type:* string

[Write] gameliftstreams:TerminateStreamSession.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] gameliftstreams:UntagResource.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string;
```

- *Type:* string

[Write] gameliftstreams:UpdateApplication.

---

##### `UpdateStreamGroup`<sup>Required</sup> <a name="UpdateStreamGroup" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsActions.property.UpdateStreamGroup"></a>

```typescript
public readonly UpdateStreamGroup: string;
```

- *Type:* string

[Write] gameliftstreams:UpdateStreamGroup.

---

### GameliftstreamsConditions <a name="GameliftstreamsConditions" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions"></a>

Condition key constants and builders for gameliftstreams.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.Initializer"></a>

```typescript
import { gameliftstreams } from '@cdk_utils/iam'

new gameliftstreams.GameliftstreamsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.roleARN">roleARN</a></code> | Generates a condition block for `gameliftstreams:RoleArn`. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.requestTag"></a>

```typescript
import { gameliftstreams } from '@cdk_utils/iam'

gameliftstreams.GameliftstreamsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.resourceTag"></a>

```typescript
import { gameliftstreams } from '@cdk_utils/iam'

gameliftstreams.GameliftstreamsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `roleARN` <a name="roleARN" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.roleARN"></a>

```typescript
import { gameliftstreams } from '@cdk_utils/iam'

gameliftstreams.GameliftstreamsConditions.roleARN(value: string)
```

Generates a condition block for `gameliftstreams:RoleArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.roleARN.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.tagKeys"></a>

```typescript
import { gameliftstreams } from '@cdk_utils/iam'

gameliftstreams.GameliftstreamsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.property.CreateApplicationConditionKeys">CreateApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApplication action. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.property.CreateStreamGroupConditionKeys">CreateStreamGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateStreamGroup action. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.property.CreateStreamUrlConditionKeys">CreateStreamUrlConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateStreamUrl action. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.property.ROLE_ARN">ROLE_ARN</a></code> | <code>string</code> | Condition key: gameliftstreams:RoleArn (ARN). |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.property.StartStreamSessionConditionKeys">StartStreamSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartStreamSession action. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateApplicationConditionKeys`<sup>Required</sup> <a name="CreateApplicationConditionKeys" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.property.CreateApplicationConditionKeys"></a>

```typescript
public readonly CreateApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApplication action.

---

##### `CreateStreamGroupConditionKeys`<sup>Required</sup> <a name="CreateStreamGroupConditionKeys" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.property.CreateStreamGroupConditionKeys"></a>

```typescript
public readonly CreateStreamGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateStreamGroup action.

---

##### `CreateStreamUrlConditionKeys`<sup>Required</sup> <a name="CreateStreamUrlConditionKeys" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.property.CreateStreamUrlConditionKeys"></a>

```typescript
public readonly CreateStreamUrlConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateStreamUrl action.

---

##### `ROLE_ARN`<sup>Required</sup> <a name="ROLE_ARN" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.property.ROLE_ARN"></a>

```typescript
public readonly ROLE_ARN: string;
```

- *Type:* string

Condition key: gameliftstreams:RoleArn (ARN).

---

##### `StartStreamSessionConditionKeys`<sup>Required</sup> <a name="StartStreamSessionConditionKeys" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.property.StartStreamSessionConditionKeys"></a>

```typescript
public readonly StartStreamSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartStreamSession action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### GameliftstreamsOperations <a name="GameliftstreamsOperations" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations"></a>

API operation to required IAM actions mapping for gameliftstreams.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.Initializer"></a>

```typescript
import { gameliftstreams } from '@cdk_utils/iam'

new gameliftstreams.GameliftstreamsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.AddStreamGroupLocations">AddStreamGroupLocations</a></code> | <code>string[]</code> | IAM actions required for the AddStreamGroupLocations API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.AssociateApplications">AssociateApplications</a></code> | <code>string[]</code> | IAM actions required for the AssociateApplications API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.CreateApplication">CreateApplication</a></code> | <code>string[]</code> | IAM actions required for the CreateApplication API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.CreateStreamGroup">CreateStreamGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateStreamGroup API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.CreateStreamSessionAdminShell">CreateStreamSessionAdminShell</a></code> | <code>string[]</code> | IAM actions required for the CreateStreamSessionAdminShell API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.CreateStreamSessionConnection">CreateStreamSessionConnection</a></code> | <code>string[]</code> | IAM actions required for the CreateStreamSessionConnection API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.CreateStreamUrl">CreateStreamUrl</a></code> | <code>string[]</code> | IAM actions required for the CreateStreamUrl API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.DeleteApplication">DeleteApplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplication API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.DeleteStreamGroup">DeleteStreamGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteStreamGroup API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.DisassociateApplications">DisassociateApplications</a></code> | <code>string[]</code> | IAM actions required for the DisassociateApplications API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.ExportStreamSessionFiles">ExportStreamSessionFiles</a></code> | <code>string[]</code> | IAM actions required for the ExportStreamSessionFiles API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.ListApplications">ListApplications</a></code> | <code>string[]</code> | IAM actions required for the ListApplications API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.ListApplicationShaderCaches">ListApplicationShaderCaches</a></code> | <code>string[]</code> | IAM actions required for the ListApplicationShaderCaches API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.ListStreamGroups">ListStreamGroups</a></code> | <code>string[]</code> | IAM actions required for the ListStreamGroups API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.ListStreamSessions">ListStreamSessions</a></code> | <code>string[]</code> | IAM actions required for the ListStreamSessions API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.ListStreamSessionsByAccount">ListStreamSessionsByAccount</a></code> | <code>string[]</code> | IAM actions required for the ListStreamSessionsByAccount API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.ListStreamUrls">ListStreamUrls</a></code> | <code>string[]</code> | IAM actions required for the ListStreamUrls API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.opGetApplication">opGetApplication</a></code> | <code>string[]</code> | IAM actions required for the GetApplication API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.opGetStreamGroup">opGetStreamGroup</a></code> | <code>string[]</code> | IAM actions required for the GetStreamGroup API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.opGetStreamSession">opGetStreamSession</a></code> | <code>string[]</code> | IAM actions required for the GetStreamSession API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.opGetStreamUrl">opGetStreamUrl</a></code> | <code>string[]</code> | IAM actions required for the GetStreamUrl API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.RemoveStreamGroupLocations">RemoveStreamGroupLocations</a></code> | <code>string[]</code> | IAM actions required for the RemoveStreamGroupLocations API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.RevokeStreamUrl">RevokeStreamUrl</a></code> | <code>string[]</code> | IAM actions required for the RevokeStreamUrl API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.StartStreamSession">StartStreamSession</a></code> | <code>string[]</code> | IAM actions required for the StartStreamSession API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.TerminateStreamSession">TerminateStreamSession</a></code> | <code>string[]</code> | IAM actions required for the TerminateStreamSession API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.UpdateApplication">UpdateApplication</a></code> | <code>string[]</code> | IAM actions required for the UpdateApplication API call. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.UpdateStreamGroup">UpdateStreamGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateStreamGroup API call. |

---

##### `AddStreamGroupLocations`<sup>Required</sup> <a name="AddStreamGroupLocations" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.AddStreamGroupLocations"></a>

```typescript
public readonly AddStreamGroupLocations: string[];
```

- *Type:* string[]

IAM actions required for the AddStreamGroupLocations API call.

---

##### `AssociateApplications`<sup>Required</sup> <a name="AssociateApplications" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.AssociateApplications"></a>

```typescript
public readonly AssociateApplications: string[];
```

- *Type:* string[]

IAM actions required for the AssociateApplications API call.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreateApplication API call.

---

##### `CreateStreamGroup`<sup>Required</sup> <a name="CreateStreamGroup" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.CreateStreamGroup"></a>

```typescript
public readonly CreateStreamGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateStreamGroup API call.

---

##### `CreateStreamSessionAdminShell`<sup>Required</sup> <a name="CreateStreamSessionAdminShell" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.CreateStreamSessionAdminShell"></a>

```typescript
public readonly CreateStreamSessionAdminShell: string[];
```

- *Type:* string[]

IAM actions required for the CreateStreamSessionAdminShell API call.

---

##### `CreateStreamSessionConnection`<sup>Required</sup> <a name="CreateStreamSessionConnection" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.CreateStreamSessionConnection"></a>

```typescript
public readonly CreateStreamSessionConnection: string[];
```

- *Type:* string[]

IAM actions required for the CreateStreamSessionConnection API call.

---

##### `CreateStreamUrl`<sup>Required</sup> <a name="CreateStreamUrl" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.CreateStreamUrl"></a>

```typescript
public readonly CreateStreamUrl: string[];
```

- *Type:* string[]

IAM actions required for the CreateStreamUrl API call.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplication API call.

---

##### `DeleteStreamGroup`<sup>Required</sup> <a name="DeleteStreamGroup" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.DeleteStreamGroup"></a>

```typescript
public readonly DeleteStreamGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteStreamGroup API call.

---

##### `DisassociateApplications`<sup>Required</sup> <a name="DisassociateApplications" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.DisassociateApplications"></a>

```typescript
public readonly DisassociateApplications: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateApplications API call.

---

##### `ExportStreamSessionFiles`<sup>Required</sup> <a name="ExportStreamSessionFiles" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.ExportStreamSessionFiles"></a>

```typescript
public readonly ExportStreamSessionFiles: string[];
```

- *Type:* string[]

IAM actions required for the ExportStreamSessionFiles API call.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.ListApplications"></a>

```typescript
public readonly ListApplications: string[];
```

- *Type:* string[]

IAM actions required for the ListApplications API call.

---

##### `ListApplicationShaderCaches`<sup>Required</sup> <a name="ListApplicationShaderCaches" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.ListApplicationShaderCaches"></a>

```typescript
public readonly ListApplicationShaderCaches: string[];
```

- *Type:* string[]

IAM actions required for the ListApplicationShaderCaches API call.

---

##### `ListStreamGroups`<sup>Required</sup> <a name="ListStreamGroups" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.ListStreamGroups"></a>

```typescript
public readonly ListStreamGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListStreamGroups API call.

---

##### `ListStreamSessions`<sup>Required</sup> <a name="ListStreamSessions" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.ListStreamSessions"></a>

```typescript
public readonly ListStreamSessions: string[];
```

- *Type:* string[]

IAM actions required for the ListStreamSessions API call.

---

##### `ListStreamSessionsByAccount`<sup>Required</sup> <a name="ListStreamSessionsByAccount" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.ListStreamSessionsByAccount"></a>

```typescript
public readonly ListStreamSessionsByAccount: string[];
```

- *Type:* string[]

IAM actions required for the ListStreamSessionsByAccount API call.

---

##### `ListStreamUrls`<sup>Required</sup> <a name="ListStreamUrls" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.ListStreamUrls"></a>

```typescript
public readonly ListStreamUrls: string[];
```

- *Type:* string[]

IAM actions required for the ListStreamUrls API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetApplication`<sup>Required</sup> <a name="opGetApplication" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.opGetApplication"></a>

```typescript
public readonly opGetApplication: string[];
```

- *Type:* string[]

IAM actions required for the GetApplication API call.

---

##### `opGetStreamGroup`<sup>Required</sup> <a name="opGetStreamGroup" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.opGetStreamGroup"></a>

```typescript
public readonly opGetStreamGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetStreamGroup API call.

---

##### `opGetStreamSession`<sup>Required</sup> <a name="opGetStreamSession" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.opGetStreamSession"></a>

```typescript
public readonly opGetStreamSession: string[];
```

- *Type:* string[]

IAM actions required for the GetStreamSession API call.

---

##### `opGetStreamUrl`<sup>Required</sup> <a name="opGetStreamUrl" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.opGetStreamUrl"></a>

```typescript
public readonly opGetStreamUrl: string[];
```

- *Type:* string[]

IAM actions required for the GetStreamUrl API call.

---

##### `RemoveStreamGroupLocations`<sup>Required</sup> <a name="RemoveStreamGroupLocations" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.RemoveStreamGroupLocations"></a>

```typescript
public readonly RemoveStreamGroupLocations: string[];
```

- *Type:* string[]

IAM actions required for the RemoveStreamGroupLocations API call.

---

##### `RevokeStreamUrl`<sup>Required</sup> <a name="RevokeStreamUrl" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.RevokeStreamUrl"></a>

```typescript
public readonly RevokeStreamUrl: string[];
```

- *Type:* string[]

IAM actions required for the RevokeStreamUrl API call.

---

##### `StartStreamSession`<sup>Required</sup> <a name="StartStreamSession" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.StartStreamSession"></a>

```typescript
public readonly StartStreamSession: string[];
```

- *Type:* string[]

IAM actions required for the StartStreamSession API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TerminateStreamSession`<sup>Required</sup> <a name="TerminateStreamSession" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.TerminateStreamSession"></a>

```typescript
public readonly TerminateStreamSession: string[];
```

- *Type:* string[]

IAM actions required for the TerminateStreamSession API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApplication API call.

---

##### `UpdateStreamGroup`<sup>Required</sup> <a name="UpdateStreamGroup" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsOperations.property.UpdateStreamGroup"></a>

```typescript
public readonly UpdateStreamGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateStreamGroup API call.

---

### GameliftstreamsResources <a name="GameliftstreamsResources" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsResources"></a>

ARN builders, validators, and parsers for gameliftstreams resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsResources.Initializer"></a>

```typescript
import { gameliftstreams } from '@cdk_utils/iam'

new gameliftstreams.GameliftstreamsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsResources.application">application</a></code> | Builds an ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsResources.isValidApplicationArn">isValidApplicationArn</a></code> | Validates whether a string is a valid ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsResources.isValidStreamGroupArn">isValidStreamGroupArn</a></code> | Validates whether a string is a valid ARN for the stream group resource. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsResources.parseApplicationArn">parseApplicationArn</a></code> | Parses a application ARN into its components. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsResources.parseStreamGroupArn">parseStreamGroupArn</a></code> | Parses a stream group ARN into its components. |
| <code><a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsResources.streamGroup">streamGroup</a></code> | Builds an ARN for the stream group resource. |

---

##### `application` <a name="application" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsResources.application"></a>

```typescript
import { gameliftstreams } from '@cdk_utils/iam'

gameliftstreams.GameliftstreamsResources.application(props: GameliftstreamsApplicationArnProps)
```

Builds an ARN for the application resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsResources.application.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsApplicationArnProps">GameliftstreamsApplicationArnProps</a>

---

##### `isValidApplicationArn` <a name="isValidApplicationArn" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsResources.isValidApplicationArn"></a>

```typescript
import { gameliftstreams } from '@cdk_utils/iam'

gameliftstreams.GameliftstreamsResources.isValidApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the application resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsResources.isValidApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStreamGroupArn` <a name="isValidStreamGroupArn" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsResources.isValidStreamGroupArn"></a>

```typescript
import { gameliftstreams } from '@cdk_utils/iam'

gameliftstreams.GameliftstreamsResources.isValidStreamGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the stream group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsResources.isValidStreamGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationArn` <a name="parseApplicationArn" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsResources.parseApplicationArn"></a>

```typescript
import { gameliftstreams } from '@cdk_utils/iam'

gameliftstreams.GameliftstreamsResources.parseApplicationArn(arn: string)
```

Parses a application ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsResources.parseApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStreamGroupArn` <a name="parseStreamGroupArn" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsResources.parseStreamGroupArn"></a>

```typescript
import { gameliftstreams } from '@cdk_utils/iam'

gameliftstreams.GameliftstreamsResources.parseStreamGroupArn(arn: string)
```

Parses a stream group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsResources.parseStreamGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `streamGroup` <a name="streamGroup" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsResources.streamGroup"></a>

```typescript
import { gameliftstreams } from '@cdk_utils/iam'

gameliftstreams.GameliftstreamsResources.streamGroup(props: GameliftstreamsStreamGroupArnProps)
```

Builds an ARN for the stream group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.gameliftstreams.GameliftstreamsResources.streamGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.gameliftstreams.GameliftstreamsStreamGroupArnProps">GameliftstreamsStreamGroupArnProps</a>

---




