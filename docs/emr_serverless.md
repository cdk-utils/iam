# `emr_serverless` Submodule <a name="`emr_serverless` Submodule" id="@cdk_utils/iam.emr_serverless"></a>


## Structs <a name="Structs" id="Structs"></a>

### EmrServerlessApplicationArnComponents <a name="EmrServerlessApplicationArnComponents" id="@cdk_utils/iam.emr_serverless.EmrServerlessApplicationArnComponents"></a>

Parsed components of a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.emr_serverless.EmrServerlessApplicationArnComponents.Initializer"></a>

```typescript
import { emr_serverless } from '@cdk_utils/iam'

const emrServerlessApplicationArnComponents: emr_serverless.EmrServerlessApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessApplicationArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.emr_serverless.EmrServerlessApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.emr_serverless.EmrServerlessApplicationArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.emr_serverless.EmrServerlessApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.emr_serverless.EmrServerlessApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EmrServerlessApplicationArnProps <a name="EmrServerlessApplicationArnProps" id="@cdk_utils/iam.emr_serverless.EmrServerlessApplicationArnProps"></a>

Properties for building a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.emr_serverless.EmrServerlessApplicationArnProps.Initializer"></a>

```typescript
import { emr_serverless } from '@cdk_utils/iam'

const emrServerlessApplicationArnProps: emr_serverless.EmrServerlessApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessApplicationArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.emr_serverless.EmrServerlessApplicationArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.emr_serverless.EmrServerlessApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.emr_serverless.EmrServerlessApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.emr_serverless.EmrServerlessApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EmrServerlessJobRunArnComponents <a name="EmrServerlessJobRunArnComponents" id="@cdk_utils/iam.emr_serverless.EmrServerlessJobRunArnComponents"></a>

Parsed components of a jobRun ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.emr_serverless.EmrServerlessJobRunArnComponents.Initializer"></a>

```typescript
import { emr_serverless } from '@cdk_utils/iam'

const emrServerlessJobRunArnComponents: emr_serverless.EmrServerlessJobRunArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessJobRunArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessJobRunArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessJobRunArnComponents.property.jobRunId">jobRunId</a></code> | <code>string</code> | The JobRunId component. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessJobRunArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessJobRunArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.emr_serverless.EmrServerlessJobRunArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.emr_serverless.EmrServerlessJobRunArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `jobRunId`<sup>Required</sup> <a name="jobRunId" id="@cdk_utils/iam.emr_serverless.EmrServerlessJobRunArnComponents.property.jobRunId"></a>

```typescript
public readonly jobRunId: string;
```

- *Type:* string

The JobRunId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.emr_serverless.EmrServerlessJobRunArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.emr_serverless.EmrServerlessJobRunArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EmrServerlessJobRunArnProps <a name="EmrServerlessJobRunArnProps" id="@cdk_utils/iam.emr_serverless.EmrServerlessJobRunArnProps"></a>

Properties for building a jobRun ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.emr_serverless.EmrServerlessJobRunArnProps.Initializer"></a>

```typescript
import { emr_serverless } from '@cdk_utils/iam'

const emrServerlessJobRunArnProps: emr_serverless.EmrServerlessJobRunArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessJobRunArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessJobRunArnProps.property.jobRunId">jobRunId</a></code> | <code>string</code> | The JobRunId component of the ARN. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessJobRunArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessJobRunArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessJobRunArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.emr_serverless.EmrServerlessJobRunArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `jobRunId`<sup>Required</sup> <a name="jobRunId" id="@cdk_utils/iam.emr_serverless.EmrServerlessJobRunArnProps.property.jobRunId"></a>

```typescript
public readonly jobRunId: string;
```

- *Type:* string

The JobRunId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.emr_serverless.EmrServerlessJobRunArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.emr_serverless.EmrServerlessJobRunArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.emr_serverless.EmrServerlessJobRunArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EmrServerlessSessionArnComponents <a name="EmrServerlessSessionArnComponents" id="@cdk_utils/iam.emr_serverless.EmrServerlessSessionArnComponents"></a>

Parsed components of a session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.emr_serverless.EmrServerlessSessionArnComponents.Initializer"></a>

```typescript
import { emr_serverless } from '@cdk_utils/iam'

const emrServerlessSessionArnComponents: emr_serverless.EmrServerlessSessionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessSessionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessSessionArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessSessionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessSessionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessSessionArnComponents.property.sessionId">sessionId</a></code> | <code>string</code> | The SessionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.emr_serverless.EmrServerlessSessionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.emr_serverless.EmrServerlessSessionArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.emr_serverless.EmrServerlessSessionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.emr_serverless.EmrServerlessSessionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdk_utils/iam.emr_serverless.EmrServerlessSessionArnComponents.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

The SessionId component.

---

### EmrServerlessSessionArnProps <a name="EmrServerlessSessionArnProps" id="@cdk_utils/iam.emr_serverless.EmrServerlessSessionArnProps"></a>

Properties for building a session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.emr_serverless.EmrServerlessSessionArnProps.Initializer"></a>

```typescript
import { emr_serverless } from '@cdk_utils/iam'

const emrServerlessSessionArnProps: emr_serverless.EmrServerlessSessionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessSessionArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessSessionArnProps.property.sessionId">sessionId</a></code> | <code>string</code> | The SessionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessSessionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessSessionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessSessionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.emr_serverless.EmrServerlessSessionArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdk_utils/iam.emr_serverless.EmrServerlessSessionArnProps.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

The SessionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.emr_serverless.EmrServerlessSessionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.emr_serverless.EmrServerlessSessionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.emr_serverless.EmrServerlessSessionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### EmrServerlessActions <a name="EmrServerlessActions" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions"></a>

IAM action constants for the emr-serverless service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.Initializer"></a>

```typescript
import { emr_serverless } from '@cdk_utils/iam'

new emr_serverless.EmrServerlessActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.AccessInteractiveEndpoints">AccessInteractiveEndpoints</a></code> | <code>string</code> | [Write] emr-serverless:AccessInteractiveEndpoints. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.AccessLivyEndpoints">AccessLivyEndpoints</a></code> | <code>string</code> | [Write] emr-serverless:AccessLivyEndpoints. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.AccessSystemProfileLogs">AccessSystemProfileLogs</a></code> | <code>string</code> | [Write] emr-serverless:AccessSystemProfileLogs. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.actionGetApplication">actionGetApplication</a></code> | <code>string</code> | [Read] emr-serverless:GetApplication. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.actionGetDashboardForJobRun">actionGetDashboardForJobRun</a></code> | <code>string</code> | [Read] emr-serverless:GetDashboardForJobRun. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.actionGetJobRun">actionGetJobRun</a></code> | <code>string</code> | [Read] emr-serverless:GetJobRun. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.actionGetResourceDashboard">actionGetResourceDashboard</a></code> | <code>string</code> | [Read] emr-serverless:GetResourceDashboard. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.actionGetSession">actionGetSession</a></code> | <code>string</code> | [Read] emr-serverless:GetSession. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.actionGetSessionEndpoint">actionGetSessionEndpoint</a></code> | <code>string</code> | [Read] emr-serverless:GetSessionEndpoint. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.CancelJobRun">CancelJobRun</a></code> | <code>string</code> | [Write] emr-serverless:CancelJobRun. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.CreateApplication">CreateApplication</a></code> | <code>string</code> | [Write] emr-serverless:CreateApplication. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.DeleteApplication">DeleteApplication</a></code> | <code>string</code> | [Write] emr-serverless:DeleteApplication. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.ListApplications">ListApplications</a></code> | <code>string</code> | [List] emr-serverless:ListApplications. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.ListJobRunAttempts">ListJobRunAttempts</a></code> | <code>string</code> | [List] emr-serverless:ListJobRunAttempts. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.ListJobRuns">ListJobRuns</a></code> | <code>string</code> | [List] emr-serverless:ListJobRuns. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.ListSessions">ListSessions</a></code> | <code>string</code> | [List] emr-serverless:ListSessions. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] emr-serverless:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.StartApplication">StartApplication</a></code> | <code>string</code> | [Write] emr-serverless:StartApplication. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.StartJobRun">StartJobRun</a></code> | <code>string</code> | [Write] emr-serverless:StartJobRun. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.StartSession">StartSession</a></code> | <code>string</code> | [Write] emr-serverless:StartSession. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.StopApplication">StopApplication</a></code> | <code>string</code> | [Write] emr-serverless:StopApplication. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] emr-serverless:TagResource. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.TerminateSession">TerminateSession</a></code> | <code>string</code> | [Write] emr-serverless:TerminateSession. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] emr-serverless:UntagResource. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.UpdateApplication">UpdateApplication</a></code> | <code>string</code> | [Write] emr-serverless:UpdateApplication. |

---

##### `AccessInteractiveEndpoints`<sup>Required</sup> <a name="AccessInteractiveEndpoints" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.AccessInteractiveEndpoints"></a>

```typescript
public readonly AccessInteractiveEndpoints: string;
```

- *Type:* string

[Write] emr-serverless:AccessInteractiveEndpoints.

---

##### `AccessLivyEndpoints`<sup>Required</sup> <a name="AccessLivyEndpoints" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.AccessLivyEndpoints"></a>

```typescript
public readonly AccessLivyEndpoints: string;
```

- *Type:* string

[Write] emr-serverless:AccessLivyEndpoints.

---

##### `AccessSystemProfileLogs`<sup>Required</sup> <a name="AccessSystemProfileLogs" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.AccessSystemProfileLogs"></a>

```typescript
public readonly AccessSystemProfileLogs: string;
```

- *Type:* string

[Write] emr-serverless:AccessSystemProfileLogs.

---

##### `actionGetApplication`<sup>Required</sup> <a name="actionGetApplication" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.actionGetApplication"></a>

```typescript
public readonly actionGetApplication: string;
```

- *Type:* string

[Read] emr-serverless:GetApplication.

---

##### `actionGetDashboardForJobRun`<sup>Required</sup> <a name="actionGetDashboardForJobRun" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.actionGetDashboardForJobRun"></a>

```typescript
public readonly actionGetDashboardForJobRun: string;
```

- *Type:* string

[Read] emr-serverless:GetDashboardForJobRun.

---

##### `actionGetJobRun`<sup>Required</sup> <a name="actionGetJobRun" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.actionGetJobRun"></a>

```typescript
public readonly actionGetJobRun: string;
```

- *Type:* string

[Read] emr-serverless:GetJobRun.

---

##### `actionGetResourceDashboard`<sup>Required</sup> <a name="actionGetResourceDashboard" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.actionGetResourceDashboard"></a>

```typescript
public readonly actionGetResourceDashboard: string;
```

- *Type:* string

[Read] emr-serverless:GetResourceDashboard.

---

##### `actionGetSession`<sup>Required</sup> <a name="actionGetSession" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.actionGetSession"></a>

```typescript
public readonly actionGetSession: string;
```

- *Type:* string

[Read] emr-serverless:GetSession.

---

##### `actionGetSessionEndpoint`<sup>Required</sup> <a name="actionGetSessionEndpoint" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.actionGetSessionEndpoint"></a>

```typescript
public readonly actionGetSessionEndpoint: string;
```

- *Type:* string

[Read] emr-serverless:GetSessionEndpoint.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelJobRun`<sup>Required</sup> <a name="CancelJobRun" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.CancelJobRun"></a>

```typescript
public readonly CancelJobRun: string;
```

- *Type:* string

[Write] emr-serverless:CancelJobRun.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string;
```

- *Type:* string

[Write] emr-serverless:CreateApplication.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string;
```

- *Type:* string

[Write] emr-serverless:DeleteApplication.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.ListApplications"></a>

```typescript
public readonly ListApplications: string;
```

- *Type:* string

[List] emr-serverless:ListApplications.

---

##### `ListJobRunAttempts`<sup>Required</sup> <a name="ListJobRunAttempts" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.ListJobRunAttempts"></a>

```typescript
public readonly ListJobRunAttempts: string;
```

- *Type:* string

[List] emr-serverless:ListJobRunAttempts.

---

##### `ListJobRuns`<sup>Required</sup> <a name="ListJobRuns" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.ListJobRuns"></a>

```typescript
public readonly ListJobRuns: string;
```

- *Type:* string

[List] emr-serverless:ListJobRuns.

---

##### `ListSessions`<sup>Required</sup> <a name="ListSessions" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.ListSessions"></a>

```typescript
public readonly ListSessions: string;
```

- *Type:* string

[List] emr-serverless:ListSessions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] emr-serverless:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartApplication`<sup>Required</sup> <a name="StartApplication" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.StartApplication"></a>

```typescript
public readonly StartApplication: string;
```

- *Type:* string

[Write] emr-serverless:StartApplication.

---

##### `StartJobRun`<sup>Required</sup> <a name="StartJobRun" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.StartJobRun"></a>

```typescript
public readonly StartJobRun: string;
```

- *Type:* string

[Write] emr-serverless:StartJobRun.

---

##### `StartSession`<sup>Required</sup> <a name="StartSession" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.StartSession"></a>

```typescript
public readonly StartSession: string;
```

- *Type:* string

[Write] emr-serverless:StartSession.

---

##### `StopApplication`<sup>Required</sup> <a name="StopApplication" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.StopApplication"></a>

```typescript
public readonly StopApplication: string;
```

- *Type:* string

[Write] emr-serverless:StopApplication.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] emr-serverless:TagResource.

---

##### `TerminateSession`<sup>Required</sup> <a name="TerminateSession" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.TerminateSession"></a>

```typescript
public readonly TerminateSession: string;
```

- *Type:* string

[Write] emr-serverless:TerminateSession.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] emr-serverless:UntagResource.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.emr_serverless.EmrServerlessActions.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string;
```

- *Type:* string

[Write] emr-serverless:UpdateApplication.

---

### EmrServerlessConditions <a name="EmrServerlessConditions" id="@cdk_utils/iam.emr_serverless.EmrServerlessConditions"></a>

Condition key constants and builders for emr-serverless.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.emr_serverless.EmrServerlessConditions.Initializer"></a>

```typescript
import { emr_serverless } from '@cdk_utils/iam'

new emr_serverless.EmrServerlessConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.emr_serverless.EmrServerlessConditions.requestTag"></a>

```typescript
import { emr_serverless } from '@cdk_utils/iam'

emr_serverless.EmrServerlessConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.emr_serverless.EmrServerlessConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.emr_serverless.EmrServerlessConditions.resourceTag"></a>

```typescript
import { emr_serverless } from '@cdk_utils/iam'

emr_serverless.EmrServerlessConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.emr_serverless.EmrServerlessConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.emr_serverless.EmrServerlessConditions.tagKeys"></a>

```typescript
import { emr_serverless } from '@cdk_utils/iam'

emr_serverless.EmrServerlessConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.emr_serverless.EmrServerlessConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessConditions.property.CreateApplicationConditionKeys">CreateApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApplication action. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessConditions.property.StartJobRunConditionKeys">StartJobRunConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartJobRun action. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessConditions.property.StartSessionConditionKeys">StartSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartSession action. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.emr_serverless.EmrServerlessConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.emr_serverless.EmrServerlessConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.emr_serverless.EmrServerlessConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateApplicationConditionKeys`<sup>Required</sup> <a name="CreateApplicationConditionKeys" id="@cdk_utils/iam.emr_serverless.EmrServerlessConditions.property.CreateApplicationConditionKeys"></a>

```typescript
public readonly CreateApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApplication action.

---

##### `StartJobRunConditionKeys`<sup>Required</sup> <a name="StartJobRunConditionKeys" id="@cdk_utils/iam.emr_serverless.EmrServerlessConditions.property.StartJobRunConditionKeys"></a>

```typescript
public readonly StartJobRunConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartJobRun action.

---

##### `StartSessionConditionKeys`<sup>Required</sup> <a name="StartSessionConditionKeys" id="@cdk_utils/iam.emr_serverless.EmrServerlessConditions.property.StartSessionConditionKeys"></a>

```typescript
public readonly StartSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartSession action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.emr_serverless.EmrServerlessConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.emr_serverless.EmrServerlessConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### EmrServerlessOperations <a name="EmrServerlessOperations" id="@cdk_utils/iam.emr_serverless.EmrServerlessOperations"></a>

API operation to required IAM actions mapping for emr-serverless.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.emr_serverless.EmrServerlessOperations.Initializer"></a>

```typescript
import { emr_serverless } from '@cdk_utils/iam'

new emr_serverless.EmrServerlessOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.CancelJobRun">CancelJobRun</a></code> | <code>string[]</code> | IAM actions required for the CancelJobRun API call. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.CreateApplication">CreateApplication</a></code> | <code>string[]</code> | IAM actions required for the CreateApplication API call. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.DeleteApplication">DeleteApplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplication API call. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.ListApplications">ListApplications</a></code> | <code>string[]</code> | IAM actions required for the ListApplications API call. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.ListJobRunAttempts">ListJobRunAttempts</a></code> | <code>string[]</code> | IAM actions required for the ListJobRunAttempts API call. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.ListJobRuns">ListJobRuns</a></code> | <code>string[]</code> | IAM actions required for the ListJobRuns API call. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.ListSessions">ListSessions</a></code> | <code>string[]</code> | IAM actions required for the ListSessions API call. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.opGetApplication">opGetApplication</a></code> | <code>string[]</code> | IAM actions required for the GetApplication API call. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.opGetDashboardForJobRun">opGetDashboardForJobRun</a></code> | <code>string[]</code> | IAM actions required for the GetDashboardForJobRun API call. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.opGetJobRun">opGetJobRun</a></code> | <code>string[]</code> | IAM actions required for the GetJobRun API call. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.opGetResourceDashboard">opGetResourceDashboard</a></code> | <code>string[]</code> | IAM actions required for the GetResourceDashboard API call. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.opGetSession">opGetSession</a></code> | <code>string[]</code> | IAM actions required for the GetSession API call. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.opGetSessionEndpoint">opGetSessionEndpoint</a></code> | <code>string[]</code> | IAM actions required for the GetSessionEndpoint API call. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.StartApplication">StartApplication</a></code> | <code>string[]</code> | IAM actions required for the StartApplication API call. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.StartJobRun">StartJobRun</a></code> | <code>string[]</code> | IAM actions required for the StartJobRun API call. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.StartSession">StartSession</a></code> | <code>string[]</code> | IAM actions required for the StartSession API call. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.StopApplication">StopApplication</a></code> | <code>string[]</code> | IAM actions required for the StopApplication API call. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.TerminateSession">TerminateSession</a></code> | <code>string[]</code> | IAM actions required for the TerminateSession API call. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.UpdateApplication">UpdateApplication</a></code> | <code>string[]</code> | IAM actions required for the UpdateApplication API call. |

---

##### `CancelJobRun`<sup>Required</sup> <a name="CancelJobRun" id="@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.CancelJobRun"></a>

```typescript
public readonly CancelJobRun: string[];
```

- *Type:* string[]

IAM actions required for the CancelJobRun API call.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreateApplication API call.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplication API call.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.ListApplications"></a>

```typescript
public readonly ListApplications: string[];
```

- *Type:* string[]

IAM actions required for the ListApplications API call.

---

##### `ListJobRunAttempts`<sup>Required</sup> <a name="ListJobRunAttempts" id="@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.ListJobRunAttempts"></a>

```typescript
public readonly ListJobRunAttempts: string[];
```

- *Type:* string[]

IAM actions required for the ListJobRunAttempts API call.

---

##### `ListJobRuns`<sup>Required</sup> <a name="ListJobRuns" id="@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.ListJobRuns"></a>

```typescript
public readonly ListJobRuns: string[];
```

- *Type:* string[]

IAM actions required for the ListJobRuns API call.

---

##### `ListSessions`<sup>Required</sup> <a name="ListSessions" id="@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.ListSessions"></a>

```typescript
public readonly ListSessions: string[];
```

- *Type:* string[]

IAM actions required for the ListSessions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetApplication`<sup>Required</sup> <a name="opGetApplication" id="@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.opGetApplication"></a>

```typescript
public readonly opGetApplication: string[];
```

- *Type:* string[]

IAM actions required for the GetApplication API call.

---

##### `opGetDashboardForJobRun`<sup>Required</sup> <a name="opGetDashboardForJobRun" id="@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.opGetDashboardForJobRun"></a>

```typescript
public readonly opGetDashboardForJobRun: string[];
```

- *Type:* string[]

IAM actions required for the GetDashboardForJobRun API call.

---

##### `opGetJobRun`<sup>Required</sup> <a name="opGetJobRun" id="@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.opGetJobRun"></a>

```typescript
public readonly opGetJobRun: string[];
```

- *Type:* string[]

IAM actions required for the GetJobRun API call.

---

##### `opGetResourceDashboard`<sup>Required</sup> <a name="opGetResourceDashboard" id="@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.opGetResourceDashboard"></a>

```typescript
public readonly opGetResourceDashboard: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceDashboard API call.

---

##### `opGetSession`<sup>Required</sup> <a name="opGetSession" id="@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.opGetSession"></a>

```typescript
public readonly opGetSession: string[];
```

- *Type:* string[]

IAM actions required for the GetSession API call.

---

##### `opGetSessionEndpoint`<sup>Required</sup> <a name="opGetSessionEndpoint" id="@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.opGetSessionEndpoint"></a>

```typescript
public readonly opGetSessionEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the GetSessionEndpoint API call.

---

##### `StartApplication`<sup>Required</sup> <a name="StartApplication" id="@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.StartApplication"></a>

```typescript
public readonly StartApplication: string[];
```

- *Type:* string[]

IAM actions required for the StartApplication API call.

---

##### `StartJobRun`<sup>Required</sup> <a name="StartJobRun" id="@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.StartJobRun"></a>

```typescript
public readonly StartJobRun: string[];
```

- *Type:* string[]

IAM actions required for the StartJobRun API call.

---

##### `StartSession`<sup>Required</sup> <a name="StartSession" id="@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.StartSession"></a>

```typescript
public readonly StartSession: string[];
```

- *Type:* string[]

IAM actions required for the StartSession API call.

---

##### `StopApplication`<sup>Required</sup> <a name="StopApplication" id="@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.StopApplication"></a>

```typescript
public readonly StopApplication: string[];
```

- *Type:* string[]

IAM actions required for the StopApplication API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TerminateSession`<sup>Required</sup> <a name="TerminateSession" id="@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.TerminateSession"></a>

```typescript
public readonly TerminateSession: string[];
```

- *Type:* string[]

IAM actions required for the TerminateSession API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.emr_serverless.EmrServerlessOperations.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApplication API call.

---

### EmrServerlessResources <a name="EmrServerlessResources" id="@cdk_utils/iam.emr_serverless.EmrServerlessResources"></a>

ARN builders, validators, and parsers for emr-serverless resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.emr_serverless.EmrServerlessResources.Initializer"></a>

```typescript
import { emr_serverless } from '@cdk_utils/iam'

new emr_serverless.EmrServerlessResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessResources.application">application</a></code> | Builds an ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessResources.isValidApplicationArn">isValidApplicationArn</a></code> | Validates whether a string is a valid ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessResources.isValidJobRunArn">isValidJobRunArn</a></code> | Validates whether a string is a valid ARN for the jobRun resource. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessResources.isValidSessionArn">isValidSessionArn</a></code> | Validates whether a string is a valid ARN for the session resource. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessResources.jobRun">jobRun</a></code> | Builds an ARN for the jobRun resource. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessResources.parseApplicationArn">parseApplicationArn</a></code> | Parses a application ARN into its components. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessResources.parseJobRunArn">parseJobRunArn</a></code> | Parses a jobRun ARN into its components. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessResources.parseSessionArn">parseSessionArn</a></code> | Parses a session ARN into its components. |
| <code><a href="#@cdk_utils/iam.emr_serverless.EmrServerlessResources.session">session</a></code> | Builds an ARN for the session resource. |

---

##### `application` <a name="application" id="@cdk_utils/iam.emr_serverless.EmrServerlessResources.application"></a>

```typescript
import { emr_serverless } from '@cdk_utils/iam'

emr_serverless.EmrServerlessResources.application(props: EmrServerlessApplicationArnProps)
```

Builds an ARN for the application resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.emr_serverless.EmrServerlessResources.application.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.emr_serverless.EmrServerlessApplicationArnProps">EmrServerlessApplicationArnProps</a>

---

##### `isValidApplicationArn` <a name="isValidApplicationArn" id="@cdk_utils/iam.emr_serverless.EmrServerlessResources.isValidApplicationArn"></a>

```typescript
import { emr_serverless } from '@cdk_utils/iam'

emr_serverless.EmrServerlessResources.isValidApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the application resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.emr_serverless.EmrServerlessResources.isValidApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidJobRunArn` <a name="isValidJobRunArn" id="@cdk_utils/iam.emr_serverless.EmrServerlessResources.isValidJobRunArn"></a>

```typescript
import { emr_serverless } from '@cdk_utils/iam'

emr_serverless.EmrServerlessResources.isValidJobRunArn(arn: string)
```

Validates whether a string is a valid ARN for the jobRun resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.emr_serverless.EmrServerlessResources.isValidJobRunArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSessionArn` <a name="isValidSessionArn" id="@cdk_utils/iam.emr_serverless.EmrServerlessResources.isValidSessionArn"></a>

```typescript
import { emr_serverless } from '@cdk_utils/iam'

emr_serverless.EmrServerlessResources.isValidSessionArn(arn: string)
```

Validates whether a string is a valid ARN for the session resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.emr_serverless.EmrServerlessResources.isValidSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `jobRun` <a name="jobRun" id="@cdk_utils/iam.emr_serverless.EmrServerlessResources.jobRun"></a>

```typescript
import { emr_serverless } from '@cdk_utils/iam'

emr_serverless.EmrServerlessResources.jobRun(props: EmrServerlessJobRunArnProps)
```

Builds an ARN for the jobRun resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.emr_serverless.EmrServerlessResources.jobRun.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.emr_serverless.EmrServerlessJobRunArnProps">EmrServerlessJobRunArnProps</a>

---

##### `parseApplicationArn` <a name="parseApplicationArn" id="@cdk_utils/iam.emr_serverless.EmrServerlessResources.parseApplicationArn"></a>

```typescript
import { emr_serverless } from '@cdk_utils/iam'

emr_serverless.EmrServerlessResources.parseApplicationArn(arn: string)
```

Parses a application ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.emr_serverless.EmrServerlessResources.parseApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseJobRunArn` <a name="parseJobRunArn" id="@cdk_utils/iam.emr_serverless.EmrServerlessResources.parseJobRunArn"></a>

```typescript
import { emr_serverless } from '@cdk_utils/iam'

emr_serverless.EmrServerlessResources.parseJobRunArn(arn: string)
```

Parses a jobRun ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.emr_serverless.EmrServerlessResources.parseJobRunArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSessionArn` <a name="parseSessionArn" id="@cdk_utils/iam.emr_serverless.EmrServerlessResources.parseSessionArn"></a>

```typescript
import { emr_serverless } from '@cdk_utils/iam'

emr_serverless.EmrServerlessResources.parseSessionArn(arn: string)
```

Parses a session ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.emr_serverless.EmrServerlessResources.parseSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `session` <a name="session" id="@cdk_utils/iam.emr_serverless.EmrServerlessResources.session"></a>

```typescript
import { emr_serverless } from '@cdk_utils/iam'

emr_serverless.EmrServerlessResources.session(props: EmrServerlessSessionArnProps)
```

Builds an ARN for the session resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.emr_serverless.EmrServerlessResources.session.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.emr_serverless.EmrServerlessSessionArnProps">EmrServerlessSessionArnProps</a>

---




