# `assurance` Submodule <a name="`assurance` Submodule" id="@cdk_utils/iam.assurance"></a>


## Structs <a name="Structs" id="Structs"></a>

### AssuranceEnvironmentArnComponents <a name="AssuranceEnvironmentArnComponents" id="@cdk_utils/iam.assurance.AssuranceEnvironmentArnComponents"></a>

Parsed components of a environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.assurance.AssuranceEnvironmentArnComponents.Initializer"></a>

```typescript
import { assurance } from '@cdk_utils/iam'

const assuranceEnvironmentArnComponents: assurance.AssuranceEnvironmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceEnvironmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceEnvironmentArnComponents.property.environment">environment</a></code> | <code>string</code> | The Environment component. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceEnvironmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceEnvironmentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.assurance.AssuranceEnvironmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdk_utils/iam.assurance.AssuranceEnvironmentArnComponents.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The Environment component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.assurance.AssuranceEnvironmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.assurance.AssuranceEnvironmentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AssuranceEnvironmentArnProps <a name="AssuranceEnvironmentArnProps" id="@cdk_utils/iam.assurance.AssuranceEnvironmentArnProps"></a>

Properties for building a environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.assurance.AssuranceEnvironmentArnProps.Initializer"></a>

```typescript
import { assurance } from '@cdk_utils/iam'

const assuranceEnvironmentArnProps: assurance.AssuranceEnvironmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceEnvironmentArnProps.property.environment">environment</a></code> | <code>string</code> | The Environment component of the ARN. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceEnvironmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceEnvironmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceEnvironmentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdk_utils/iam.assurance.AssuranceEnvironmentArnProps.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The Environment component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.assurance.AssuranceEnvironmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.assurance.AssuranceEnvironmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.assurance.AssuranceEnvironmentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### AssuranceActions <a name="AssuranceActions" id="@cdk_utils/iam.assurance.AssuranceActions"></a>

IAM action constants for the assurance service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.assurance.AssuranceActions.Initializer"></a>

```typescript
import { assurance } from '@cdk_utils/iam'

new assurance.AssuranceActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.AcceptInvitation">AcceptInvitation</a></code> | <code>string</code> | [Write] assurance:AcceptInvitation. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.actionGetAnnotation">actionGetAnnotation</a></code> | <code>string</code> | [Read] assurance:GetAnnotation. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.actionGetAssessment">actionGetAssessment</a></code> | <code>string</code> | [Read] assurance:GetAssessment. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.actionGetAssessmentReportContent">actionGetAssessmentReportContent</a></code> | <code>string</code> | [Read] assurance:GetAssessmentReportContent. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.actionGetAssessmentReportExport">actionGetAssessmentReportExport</a></code> | <code>string</code> | [Read] assurance:GetAssessmentReportExport. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.actionGetChatMessages">actionGetChatMessages</a></code> | <code>string</code> | [Read] assurance:GetChatMessages. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.actionGetComment">actionGetComment</a></code> | <code>string</code> | [Read] assurance:GetComment. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.actionGetControl">actionGetControl</a></code> | <code>string</code> | [Read] assurance:GetControl. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.actionGetControlGroup">actionGetControlGroup</a></code> | <code>string</code> | [Read] assurance:GetControlGroup. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.actionGetControlStatus">actionGetControlStatus</a></code> | <code>string</code> | [Read] assurance:GetControlStatus. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.actionGetEnvironment">actionGetEnvironment</a></code> | <code>string</code> | [Read] assurance:GetEnvironment. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.actionGetEvidence">actionGetEvidence</a></code> | <code>string</code> | [Read] assurance:GetEvidence. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.actionGetEvidenceContent">actionGetEvidenceContent</a></code> | <code>string</code> | [Read] assurance:GetEvidenceContent. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.actionGetFramework">actionGetFramework</a></code> | <code>string</code> | [Read] assurance:GetFramework. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.actionGetInvitation">actionGetInvitation</a></code> | <code>string</code> | [Read] assurance:GetInvitation. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.actionGetPermissionSet">actionGetPermissionSet</a></code> | <code>string</code> | [Read] assurance:GetPermissionSet. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.actionGetProject">actionGetProject</a></code> | <code>string</code> | [Read] assurance:GetProject. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.actionGetTask">actionGetTask</a></code> | <code>string</code> | [Read] assurance:GetTask. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.AssignPermissionSet">AssignPermissionSet</a></code> | <code>string</code> | [Write] assurance:AssignPermissionSet. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.BatchGetComment">BatchGetComment</a></code> | <code>string</code> | [Read] assurance:BatchGetComment. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.BatchGetControl">BatchGetControl</a></code> | <code>string</code> | [Read] assurance:BatchGetControl. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.BatchGetTask">BatchGetTask</a></code> | <code>string</code> | [Read] assurance:BatchGetTask. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.Chat">Chat</a></code> | <code>string</code> | [Write] assurance:Chat. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.CreateAnnotation">CreateAnnotation</a></code> | <code>string</code> | [Write] assurance:CreateAnnotation. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.CreateComment">CreateComment</a></code> | <code>string</code> | [Write] assurance:CreateComment. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.CreateControl">CreateControl</a></code> | <code>string</code> | [Write] assurance:CreateControl. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.CreateControlGroup">CreateControlGroup</a></code> | <code>string</code> | [Write] assurance:CreateControlGroup. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.CreateEnvironment">CreateEnvironment</a></code> | <code>string</code> | [Write] assurance:CreateEnvironment. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.CreateEnvironmentConnection">CreateEnvironmentConnection</a></code> | <code>string</code> | [Write] assurance:CreateEnvironmentConnection. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.CreateFramework">CreateFramework</a></code> | <code>string</code> | [Write] assurance:CreateFramework. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.CreateInvitation">CreateInvitation</a></code> | <code>string</code> | [Write] assurance:CreateInvitation. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.CreatePermissionSet">CreatePermissionSet</a></code> | <code>string</code> | [Write] assurance:CreatePermissionSet. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.CreateProject">CreateProject</a></code> | <code>string</code> | [Write] assurance:CreateProject. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.CreateTask">CreateTask</a></code> | <code>string</code> | [Write] assurance:CreateTask. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.DeleteAnnotation">DeleteAnnotation</a></code> | <code>string</code> | [Write] assurance:DeleteAnnotation. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.DeleteComment">DeleteComment</a></code> | <code>string</code> | [Write] assurance:DeleteComment. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.DeleteControl">DeleteControl</a></code> | <code>string</code> | [Write] assurance:DeleteControl. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.DeleteControlGroup">DeleteControlGroup</a></code> | <code>string</code> | [Write] assurance:DeleteControlGroup. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.DeleteEnvironment">DeleteEnvironment</a></code> | <code>string</code> | [Write] assurance:DeleteEnvironment. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.DeleteEnvironmentConnection">DeleteEnvironmentConnection</a></code> | <code>string</code> | [Write] assurance:DeleteEnvironmentConnection. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.DeleteEvidence">DeleteEvidence</a></code> | <code>string</code> | [Write] assurance:DeleteEvidence. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.DeleteFramework">DeleteFramework</a></code> | <code>string</code> | [Write] assurance:DeleteFramework. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.DeleteInvitation">DeleteInvitation</a></code> | <code>string</code> | [Write] assurance:DeleteInvitation. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.DeletePermissionSet">DeletePermissionSet</a></code> | <code>string</code> | [Write] assurance:DeletePermissionSet. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.DeleteProject">DeleteProject</a></code> | <code>string</code> | [Write] assurance:DeleteProject. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.DeregisterOrganizationDelegatedAdmin">DeregisterOrganizationDelegatedAdmin</a></code> | <code>string</code> | [Write] assurance:DeregisterOrganizationDelegatedAdmin. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.DisableFramework">DisableFramework</a></code> | <code>string</code> | [Write] assurance:DisableFramework. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.DownloadEvidence">DownloadEvidence</a></code> | <code>string</code> | [Read] assurance:DownloadEvidence. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.EnableFramework">EnableFramework</a></code> | <code>string</code> | [Write] assurance:EnableFramework. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.ListAssessmentAnnotations">ListAssessmentAnnotations</a></code> | <code>string</code> | [Read] assurance:ListAssessmentAnnotations. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.ListAssessmentJournalRecords">ListAssessmentJournalRecords</a></code> | <code>string</code> | [Read] assurance:ListAssessmentJournalRecords. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.ListAssessmentOutcomes">ListAssessmentOutcomes</a></code> | <code>string</code> | [Read] assurance:ListAssessmentOutcomes. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.ListAssessments">ListAssessments</a></code> | <code>string</code> | [Read] assurance:ListAssessments. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.ListChatSessions">ListChatSessions</a></code> | <code>string</code> | [Read] assurance:ListChatSessions. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.ListComments">ListComments</a></code> | <code>string</code> | [Read] assurance:ListComments. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.ListConnectionItems">ListConnectionItems</a></code> | <code>string</code> | [Read] assurance:ListConnectionItems. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.ListControlGroups">ListControlGroups</a></code> | <code>string</code> | [Read] assurance:ListControlGroups. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.ListControlResources">ListControlResources</a></code> | <code>string</code> | [Read] assurance:ListControlResources. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.ListControls">ListControls</a></code> | <code>string</code> | [Read] assurance:ListControls. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.ListDiscoveredResources">ListDiscoveredResources</a></code> | <code>string</code> | [Read] assurance:ListDiscoveredResources. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.ListEnabledFrameworks">ListEnabledFrameworks</a></code> | <code>string</code> | [Read] assurance:ListEnabledFrameworks. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.ListEnvironmentConnections">ListEnvironmentConnections</a></code> | <code>string</code> | [Read] assurance:ListEnvironmentConnections. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.ListEnvironments">ListEnvironments</a></code> | <code>string</code> | [Read] assurance:ListEnvironments. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.ListEvidence">ListEvidence</a></code> | <code>string</code> | [Read] assurance:ListEvidence. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.ListEvidenceAnnotations">ListEvidenceAnnotations</a></code> | <code>string</code> | [Read] assurance:ListEvidenceAnnotations. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.ListFrameworks">ListFrameworks</a></code> | <code>string</code> | [Read] assurance:ListFrameworks. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.ListInboundInvitations">ListInboundInvitations</a></code> | <code>string</code> | [Read] assurance:ListInboundInvitations. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.ListOutboundInvitations">ListOutboundInvitations</a></code> | <code>string</code> | [Read] assurance:ListOutboundInvitations. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.ListPermissionSetAssignments">ListPermissionSetAssignments</a></code> | <code>string</code> | [Read] assurance:ListPermissionSetAssignments. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.ListPermissionSets">ListPermissionSets</a></code> | <code>string</code> | [Read] assurance:ListPermissionSets. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.ListProjects">ListProjects</a></code> | <code>string</code> | [Read] assurance:ListProjects. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.ListResourcesForControl">ListResourcesForControl</a></code> | <code>string</code> | [Read] assurance:ListResourcesForControl. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] assurance:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.ListTaskHistory">ListTaskHistory</a></code> | <code>string</code> | [Read] assurance:ListTaskHistory. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.ListTasks">ListTasks</a></code> | <code>string</code> | [Read] assurance:ListTasks. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.PublishFramework">PublishFramework</a></code> | <code>string</code> | [Write] assurance:PublishFramework. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.PutControlStatusOverride">PutControlStatusOverride</a></code> | <code>string</code> | [Write] assurance:PutControlStatusOverride. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.PutEvidence">PutEvidence</a></code> | <code>string</code> | [Write] assurance:PutEvidence. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.RegisterOrganizationDelegatedAdmin">RegisterOrganizationDelegatedAdmin</a></code> | <code>string</code> | [Write] assurance:RegisterOrganizationDelegatedAdmin. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.RejectInvitation">RejectInvitation</a></code> | <code>string</code> | [Write] assurance:RejectInvitation. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.RevokePermissionSet">RevokePermissionSet</a></code> | <code>string</code> | [Write] assurance:RevokePermissionSet. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.StartAssessment">StartAssessment</a></code> | <code>string</code> | [Write] assurance:StartAssessment. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.StartAssessmentReportExport">StartAssessmentReportExport</a></code> | <code>string</code> | [Write] assurance:StartAssessmentReportExport. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.StartResourceDiscovery">StartResourceDiscovery</a></code> | <code>string</code> | [Write] assurance:StartResourceDiscovery. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] assurance:TagResource. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] assurance:UntagResource. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.UpdateAnnotation">UpdateAnnotation</a></code> | <code>string</code> | [Write] assurance:UpdateAnnotation. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.UpdateAssessment">UpdateAssessment</a></code> | <code>string</code> | [Write] assurance:UpdateAssessment. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.UpdateComment">UpdateComment</a></code> | <code>string</code> | [Write] assurance:UpdateComment. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.UpdateControl">UpdateControl</a></code> | <code>string</code> | [Write] assurance:UpdateControl. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.UpdateControlGroup">UpdateControlGroup</a></code> | <code>string</code> | [Write] assurance:UpdateControlGroup. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.UpdateEnvironment">UpdateEnvironment</a></code> | <code>string</code> | [Write] assurance:UpdateEnvironment. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.UpdateEvidence">UpdateEvidence</a></code> | <code>string</code> | [Write] assurance:UpdateEvidence. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.UpdateFramework">UpdateFramework</a></code> | <code>string</code> | [Write] assurance:UpdateFramework. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.UpdatePermissionSet">UpdatePermissionSet</a></code> | <code>string</code> | [Write] assurance:UpdatePermissionSet. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.UpdateProject">UpdateProject</a></code> | <code>string</code> | [Write] assurance:UpdateProject. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.UpdateTask">UpdateTask</a></code> | <code>string</code> | [Write] assurance:UpdateTask. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.UploadEvidence">UploadEvidence</a></code> | <code>string</code> | [Write] assurance:UploadEvidence. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceActions.property.VendConnectionAccessToken">VendConnectionAccessToken</a></code> | <code>string</code> | [Write] assurance:VendConnectionAccessToken. |

---

##### `AcceptInvitation`<sup>Required</sup> <a name="AcceptInvitation" id="@cdk_utils/iam.assurance.AssuranceActions.property.AcceptInvitation"></a>

```typescript
public readonly AcceptInvitation: string;
```

- *Type:* string

[Write] assurance:AcceptInvitation.

---

##### `actionGetAnnotation`<sup>Required</sup> <a name="actionGetAnnotation" id="@cdk_utils/iam.assurance.AssuranceActions.property.actionGetAnnotation"></a>

```typescript
public readonly actionGetAnnotation: string;
```

- *Type:* string

[Read] assurance:GetAnnotation.

---

##### `actionGetAssessment`<sup>Required</sup> <a name="actionGetAssessment" id="@cdk_utils/iam.assurance.AssuranceActions.property.actionGetAssessment"></a>

```typescript
public readonly actionGetAssessment: string;
```

- *Type:* string

[Read] assurance:GetAssessment.

---

##### `actionGetAssessmentReportContent`<sup>Required</sup> <a name="actionGetAssessmentReportContent" id="@cdk_utils/iam.assurance.AssuranceActions.property.actionGetAssessmentReportContent"></a>

```typescript
public readonly actionGetAssessmentReportContent: string;
```

- *Type:* string

[Read] assurance:GetAssessmentReportContent.

---

##### `actionGetAssessmentReportExport`<sup>Required</sup> <a name="actionGetAssessmentReportExport" id="@cdk_utils/iam.assurance.AssuranceActions.property.actionGetAssessmentReportExport"></a>

```typescript
public readonly actionGetAssessmentReportExport: string;
```

- *Type:* string

[Read] assurance:GetAssessmentReportExport.

---

##### `actionGetChatMessages`<sup>Required</sup> <a name="actionGetChatMessages" id="@cdk_utils/iam.assurance.AssuranceActions.property.actionGetChatMessages"></a>

```typescript
public readonly actionGetChatMessages: string;
```

- *Type:* string

[Read] assurance:GetChatMessages.

---

##### `actionGetComment`<sup>Required</sup> <a name="actionGetComment" id="@cdk_utils/iam.assurance.AssuranceActions.property.actionGetComment"></a>

```typescript
public readonly actionGetComment: string;
```

- *Type:* string

[Read] assurance:GetComment.

---

##### `actionGetControl`<sup>Required</sup> <a name="actionGetControl" id="@cdk_utils/iam.assurance.AssuranceActions.property.actionGetControl"></a>

```typescript
public readonly actionGetControl: string;
```

- *Type:* string

[Read] assurance:GetControl.

---

##### `actionGetControlGroup`<sup>Required</sup> <a name="actionGetControlGroup" id="@cdk_utils/iam.assurance.AssuranceActions.property.actionGetControlGroup"></a>

```typescript
public readonly actionGetControlGroup: string;
```

- *Type:* string

[Read] assurance:GetControlGroup.

---

##### `actionGetControlStatus`<sup>Required</sup> <a name="actionGetControlStatus" id="@cdk_utils/iam.assurance.AssuranceActions.property.actionGetControlStatus"></a>

```typescript
public readonly actionGetControlStatus: string;
```

- *Type:* string

[Read] assurance:GetControlStatus.

---

##### `actionGetEnvironment`<sup>Required</sup> <a name="actionGetEnvironment" id="@cdk_utils/iam.assurance.AssuranceActions.property.actionGetEnvironment"></a>

```typescript
public readonly actionGetEnvironment: string;
```

- *Type:* string

[Read] assurance:GetEnvironment.

---

##### `actionGetEvidence`<sup>Required</sup> <a name="actionGetEvidence" id="@cdk_utils/iam.assurance.AssuranceActions.property.actionGetEvidence"></a>

```typescript
public readonly actionGetEvidence: string;
```

- *Type:* string

[Read] assurance:GetEvidence.

---

##### `actionGetEvidenceContent`<sup>Required</sup> <a name="actionGetEvidenceContent" id="@cdk_utils/iam.assurance.AssuranceActions.property.actionGetEvidenceContent"></a>

```typescript
public readonly actionGetEvidenceContent: string;
```

- *Type:* string

[Read] assurance:GetEvidenceContent.

---

##### `actionGetFramework`<sup>Required</sup> <a name="actionGetFramework" id="@cdk_utils/iam.assurance.AssuranceActions.property.actionGetFramework"></a>

```typescript
public readonly actionGetFramework: string;
```

- *Type:* string

[Read] assurance:GetFramework.

---

##### `actionGetInvitation`<sup>Required</sup> <a name="actionGetInvitation" id="@cdk_utils/iam.assurance.AssuranceActions.property.actionGetInvitation"></a>

```typescript
public readonly actionGetInvitation: string;
```

- *Type:* string

[Read] assurance:GetInvitation.

---

##### `actionGetPermissionSet`<sup>Required</sup> <a name="actionGetPermissionSet" id="@cdk_utils/iam.assurance.AssuranceActions.property.actionGetPermissionSet"></a>

```typescript
public readonly actionGetPermissionSet: string;
```

- *Type:* string

[Read] assurance:GetPermissionSet.

---

##### `actionGetProject`<sup>Required</sup> <a name="actionGetProject" id="@cdk_utils/iam.assurance.AssuranceActions.property.actionGetProject"></a>

```typescript
public readonly actionGetProject: string;
```

- *Type:* string

[Read] assurance:GetProject.

---

##### `actionGetTask`<sup>Required</sup> <a name="actionGetTask" id="@cdk_utils/iam.assurance.AssuranceActions.property.actionGetTask"></a>

```typescript
public readonly actionGetTask: string;
```

- *Type:* string

[Read] assurance:GetTask.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.assurance.AssuranceActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.assurance.AssuranceActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.assurance.AssuranceActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.assurance.AssuranceActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.assurance.AssuranceActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssignPermissionSet`<sup>Required</sup> <a name="AssignPermissionSet" id="@cdk_utils/iam.assurance.AssuranceActions.property.AssignPermissionSet"></a>

```typescript
public readonly AssignPermissionSet: string;
```

- *Type:* string

[Write] assurance:AssignPermissionSet.

---

##### `BatchGetComment`<sup>Required</sup> <a name="BatchGetComment" id="@cdk_utils/iam.assurance.AssuranceActions.property.BatchGetComment"></a>

```typescript
public readonly BatchGetComment: string;
```

- *Type:* string

[Read] assurance:BatchGetComment.

---

##### `BatchGetControl`<sup>Required</sup> <a name="BatchGetControl" id="@cdk_utils/iam.assurance.AssuranceActions.property.BatchGetControl"></a>

```typescript
public readonly BatchGetControl: string;
```

- *Type:* string

[Read] assurance:BatchGetControl.

---

##### `BatchGetTask`<sup>Required</sup> <a name="BatchGetTask" id="@cdk_utils/iam.assurance.AssuranceActions.property.BatchGetTask"></a>

```typescript
public readonly BatchGetTask: string;
```

- *Type:* string

[Read] assurance:BatchGetTask.

---

##### `Chat`<sup>Required</sup> <a name="Chat" id="@cdk_utils/iam.assurance.AssuranceActions.property.Chat"></a>

```typescript
public readonly Chat: string;
```

- *Type:* string

[Write] assurance:Chat.

---

##### `CreateAnnotation`<sup>Required</sup> <a name="CreateAnnotation" id="@cdk_utils/iam.assurance.AssuranceActions.property.CreateAnnotation"></a>

```typescript
public readonly CreateAnnotation: string;
```

- *Type:* string

[Write] assurance:CreateAnnotation.

---

##### `CreateComment`<sup>Required</sup> <a name="CreateComment" id="@cdk_utils/iam.assurance.AssuranceActions.property.CreateComment"></a>

```typescript
public readonly CreateComment: string;
```

- *Type:* string

[Write] assurance:CreateComment.

---

##### `CreateControl`<sup>Required</sup> <a name="CreateControl" id="@cdk_utils/iam.assurance.AssuranceActions.property.CreateControl"></a>

```typescript
public readonly CreateControl: string;
```

- *Type:* string

[Write] assurance:CreateControl.

---

##### `CreateControlGroup`<sup>Required</sup> <a name="CreateControlGroup" id="@cdk_utils/iam.assurance.AssuranceActions.property.CreateControlGroup"></a>

```typescript
public readonly CreateControlGroup: string;
```

- *Type:* string

[Write] assurance:CreateControlGroup.

---

##### `CreateEnvironment`<sup>Required</sup> <a name="CreateEnvironment" id="@cdk_utils/iam.assurance.AssuranceActions.property.CreateEnvironment"></a>

```typescript
public readonly CreateEnvironment: string;
```

- *Type:* string

[Write] assurance:CreateEnvironment.

---

##### `CreateEnvironmentConnection`<sup>Required</sup> <a name="CreateEnvironmentConnection" id="@cdk_utils/iam.assurance.AssuranceActions.property.CreateEnvironmentConnection"></a>

```typescript
public readonly CreateEnvironmentConnection: string;
```

- *Type:* string

[Write] assurance:CreateEnvironmentConnection.

---

##### `CreateFramework`<sup>Required</sup> <a name="CreateFramework" id="@cdk_utils/iam.assurance.AssuranceActions.property.CreateFramework"></a>

```typescript
public readonly CreateFramework: string;
```

- *Type:* string

[Write] assurance:CreateFramework.

---

##### `CreateInvitation`<sup>Required</sup> <a name="CreateInvitation" id="@cdk_utils/iam.assurance.AssuranceActions.property.CreateInvitation"></a>

```typescript
public readonly CreateInvitation: string;
```

- *Type:* string

[Write] assurance:CreateInvitation.

---

##### `CreatePermissionSet`<sup>Required</sup> <a name="CreatePermissionSet" id="@cdk_utils/iam.assurance.AssuranceActions.property.CreatePermissionSet"></a>

```typescript
public readonly CreatePermissionSet: string;
```

- *Type:* string

[Write] assurance:CreatePermissionSet.

---

##### `CreateProject`<sup>Required</sup> <a name="CreateProject" id="@cdk_utils/iam.assurance.AssuranceActions.property.CreateProject"></a>

```typescript
public readonly CreateProject: string;
```

- *Type:* string

[Write] assurance:CreateProject.

---

##### `CreateTask`<sup>Required</sup> <a name="CreateTask" id="@cdk_utils/iam.assurance.AssuranceActions.property.CreateTask"></a>

```typescript
public readonly CreateTask: string;
```

- *Type:* string

[Write] assurance:CreateTask.

---

##### `DeleteAnnotation`<sup>Required</sup> <a name="DeleteAnnotation" id="@cdk_utils/iam.assurance.AssuranceActions.property.DeleteAnnotation"></a>

```typescript
public readonly DeleteAnnotation: string;
```

- *Type:* string

[Write] assurance:DeleteAnnotation.

---

##### `DeleteComment`<sup>Required</sup> <a name="DeleteComment" id="@cdk_utils/iam.assurance.AssuranceActions.property.DeleteComment"></a>

```typescript
public readonly DeleteComment: string;
```

- *Type:* string

[Write] assurance:DeleteComment.

---

##### `DeleteControl`<sup>Required</sup> <a name="DeleteControl" id="@cdk_utils/iam.assurance.AssuranceActions.property.DeleteControl"></a>

```typescript
public readonly DeleteControl: string;
```

- *Type:* string

[Write] assurance:DeleteControl.

---

##### `DeleteControlGroup`<sup>Required</sup> <a name="DeleteControlGroup" id="@cdk_utils/iam.assurance.AssuranceActions.property.DeleteControlGroup"></a>

```typescript
public readonly DeleteControlGroup: string;
```

- *Type:* string

[Write] assurance:DeleteControlGroup.

---

##### `DeleteEnvironment`<sup>Required</sup> <a name="DeleteEnvironment" id="@cdk_utils/iam.assurance.AssuranceActions.property.DeleteEnvironment"></a>

```typescript
public readonly DeleteEnvironment: string;
```

- *Type:* string

[Write] assurance:DeleteEnvironment.

---

##### `DeleteEnvironmentConnection`<sup>Required</sup> <a name="DeleteEnvironmentConnection" id="@cdk_utils/iam.assurance.AssuranceActions.property.DeleteEnvironmentConnection"></a>

```typescript
public readonly DeleteEnvironmentConnection: string;
```

- *Type:* string

[Write] assurance:DeleteEnvironmentConnection.

---

##### `DeleteEvidence`<sup>Required</sup> <a name="DeleteEvidence" id="@cdk_utils/iam.assurance.AssuranceActions.property.DeleteEvidence"></a>

```typescript
public readonly DeleteEvidence: string;
```

- *Type:* string

[Write] assurance:DeleteEvidence.

---

##### `DeleteFramework`<sup>Required</sup> <a name="DeleteFramework" id="@cdk_utils/iam.assurance.AssuranceActions.property.DeleteFramework"></a>

```typescript
public readonly DeleteFramework: string;
```

- *Type:* string

[Write] assurance:DeleteFramework.

---

##### `DeleteInvitation`<sup>Required</sup> <a name="DeleteInvitation" id="@cdk_utils/iam.assurance.AssuranceActions.property.DeleteInvitation"></a>

```typescript
public readonly DeleteInvitation: string;
```

- *Type:* string

[Write] assurance:DeleteInvitation.

---

##### `DeletePermissionSet`<sup>Required</sup> <a name="DeletePermissionSet" id="@cdk_utils/iam.assurance.AssuranceActions.property.DeletePermissionSet"></a>

```typescript
public readonly DeletePermissionSet: string;
```

- *Type:* string

[Write] assurance:DeletePermissionSet.

---

##### `DeleteProject`<sup>Required</sup> <a name="DeleteProject" id="@cdk_utils/iam.assurance.AssuranceActions.property.DeleteProject"></a>

```typescript
public readonly DeleteProject: string;
```

- *Type:* string

[Write] assurance:DeleteProject.

---

##### `DeregisterOrganizationDelegatedAdmin`<sup>Required</sup> <a name="DeregisterOrganizationDelegatedAdmin" id="@cdk_utils/iam.assurance.AssuranceActions.property.DeregisterOrganizationDelegatedAdmin"></a>

```typescript
public readonly DeregisterOrganizationDelegatedAdmin: string;
```

- *Type:* string

[Write] assurance:DeregisterOrganizationDelegatedAdmin.

---

##### `DisableFramework`<sup>Required</sup> <a name="DisableFramework" id="@cdk_utils/iam.assurance.AssuranceActions.property.DisableFramework"></a>

```typescript
public readonly DisableFramework: string;
```

- *Type:* string

[Write] assurance:DisableFramework.

---

##### `DownloadEvidence`<sup>Required</sup> <a name="DownloadEvidence" id="@cdk_utils/iam.assurance.AssuranceActions.property.DownloadEvidence"></a>

```typescript
public readonly DownloadEvidence: string;
```

- *Type:* string

[Read] assurance:DownloadEvidence.

---

##### `EnableFramework`<sup>Required</sup> <a name="EnableFramework" id="@cdk_utils/iam.assurance.AssuranceActions.property.EnableFramework"></a>

```typescript
public readonly EnableFramework: string;
```

- *Type:* string

[Write] assurance:EnableFramework.

---

##### `ListAssessmentAnnotations`<sup>Required</sup> <a name="ListAssessmentAnnotations" id="@cdk_utils/iam.assurance.AssuranceActions.property.ListAssessmentAnnotations"></a>

```typescript
public readonly ListAssessmentAnnotations: string;
```

- *Type:* string

[Read] assurance:ListAssessmentAnnotations.

---

##### `ListAssessmentJournalRecords`<sup>Required</sup> <a name="ListAssessmentJournalRecords" id="@cdk_utils/iam.assurance.AssuranceActions.property.ListAssessmentJournalRecords"></a>

```typescript
public readonly ListAssessmentJournalRecords: string;
```

- *Type:* string

[Read] assurance:ListAssessmentJournalRecords.

---

##### `ListAssessmentOutcomes`<sup>Required</sup> <a name="ListAssessmentOutcomes" id="@cdk_utils/iam.assurance.AssuranceActions.property.ListAssessmentOutcomes"></a>

```typescript
public readonly ListAssessmentOutcomes: string;
```

- *Type:* string

[Read] assurance:ListAssessmentOutcomes.

---

##### `ListAssessments`<sup>Required</sup> <a name="ListAssessments" id="@cdk_utils/iam.assurance.AssuranceActions.property.ListAssessments"></a>

```typescript
public readonly ListAssessments: string;
```

- *Type:* string

[Read] assurance:ListAssessments.

---

##### `ListChatSessions`<sup>Required</sup> <a name="ListChatSessions" id="@cdk_utils/iam.assurance.AssuranceActions.property.ListChatSessions"></a>

```typescript
public readonly ListChatSessions: string;
```

- *Type:* string

[Read] assurance:ListChatSessions.

---

##### `ListComments`<sup>Required</sup> <a name="ListComments" id="@cdk_utils/iam.assurance.AssuranceActions.property.ListComments"></a>

```typescript
public readonly ListComments: string;
```

- *Type:* string

[Read] assurance:ListComments.

---

##### `ListConnectionItems`<sup>Required</sup> <a name="ListConnectionItems" id="@cdk_utils/iam.assurance.AssuranceActions.property.ListConnectionItems"></a>

```typescript
public readonly ListConnectionItems: string;
```

- *Type:* string

[Read] assurance:ListConnectionItems.

---

##### `ListControlGroups`<sup>Required</sup> <a name="ListControlGroups" id="@cdk_utils/iam.assurance.AssuranceActions.property.ListControlGroups"></a>

```typescript
public readonly ListControlGroups: string;
```

- *Type:* string

[Read] assurance:ListControlGroups.

---

##### `ListControlResources`<sup>Required</sup> <a name="ListControlResources" id="@cdk_utils/iam.assurance.AssuranceActions.property.ListControlResources"></a>

```typescript
public readonly ListControlResources: string;
```

- *Type:* string

[Read] assurance:ListControlResources.

---

##### `ListControls`<sup>Required</sup> <a name="ListControls" id="@cdk_utils/iam.assurance.AssuranceActions.property.ListControls"></a>

```typescript
public readonly ListControls: string;
```

- *Type:* string

[Read] assurance:ListControls.

---

##### `ListDiscoveredResources`<sup>Required</sup> <a name="ListDiscoveredResources" id="@cdk_utils/iam.assurance.AssuranceActions.property.ListDiscoveredResources"></a>

```typescript
public readonly ListDiscoveredResources: string;
```

- *Type:* string

[Read] assurance:ListDiscoveredResources.

---

##### `ListEnabledFrameworks`<sup>Required</sup> <a name="ListEnabledFrameworks" id="@cdk_utils/iam.assurance.AssuranceActions.property.ListEnabledFrameworks"></a>

```typescript
public readonly ListEnabledFrameworks: string;
```

- *Type:* string

[Read] assurance:ListEnabledFrameworks.

---

##### `ListEnvironmentConnections`<sup>Required</sup> <a name="ListEnvironmentConnections" id="@cdk_utils/iam.assurance.AssuranceActions.property.ListEnvironmentConnections"></a>

```typescript
public readonly ListEnvironmentConnections: string;
```

- *Type:* string

[Read] assurance:ListEnvironmentConnections.

---

##### `ListEnvironments`<sup>Required</sup> <a name="ListEnvironments" id="@cdk_utils/iam.assurance.AssuranceActions.property.ListEnvironments"></a>

```typescript
public readonly ListEnvironments: string;
```

- *Type:* string

[Read] assurance:ListEnvironments.

---

##### `ListEvidence`<sup>Required</sup> <a name="ListEvidence" id="@cdk_utils/iam.assurance.AssuranceActions.property.ListEvidence"></a>

```typescript
public readonly ListEvidence: string;
```

- *Type:* string

[Read] assurance:ListEvidence.

---

##### `ListEvidenceAnnotations`<sup>Required</sup> <a name="ListEvidenceAnnotations" id="@cdk_utils/iam.assurance.AssuranceActions.property.ListEvidenceAnnotations"></a>

```typescript
public readonly ListEvidenceAnnotations: string;
```

- *Type:* string

[Read] assurance:ListEvidenceAnnotations.

---

##### `ListFrameworks`<sup>Required</sup> <a name="ListFrameworks" id="@cdk_utils/iam.assurance.AssuranceActions.property.ListFrameworks"></a>

```typescript
public readonly ListFrameworks: string;
```

- *Type:* string

[Read] assurance:ListFrameworks.

---

##### `ListInboundInvitations`<sup>Required</sup> <a name="ListInboundInvitations" id="@cdk_utils/iam.assurance.AssuranceActions.property.ListInboundInvitations"></a>

```typescript
public readonly ListInboundInvitations: string;
```

- *Type:* string

[Read] assurance:ListInboundInvitations.

---

##### `ListOutboundInvitations`<sup>Required</sup> <a name="ListOutboundInvitations" id="@cdk_utils/iam.assurance.AssuranceActions.property.ListOutboundInvitations"></a>

```typescript
public readonly ListOutboundInvitations: string;
```

- *Type:* string

[Read] assurance:ListOutboundInvitations.

---

##### `ListPermissionSetAssignments`<sup>Required</sup> <a name="ListPermissionSetAssignments" id="@cdk_utils/iam.assurance.AssuranceActions.property.ListPermissionSetAssignments"></a>

```typescript
public readonly ListPermissionSetAssignments: string;
```

- *Type:* string

[Read] assurance:ListPermissionSetAssignments.

---

##### `ListPermissionSets`<sup>Required</sup> <a name="ListPermissionSets" id="@cdk_utils/iam.assurance.AssuranceActions.property.ListPermissionSets"></a>

```typescript
public readonly ListPermissionSets: string;
```

- *Type:* string

[Read] assurance:ListPermissionSets.

---

##### `ListProjects`<sup>Required</sup> <a name="ListProjects" id="@cdk_utils/iam.assurance.AssuranceActions.property.ListProjects"></a>

```typescript
public readonly ListProjects: string;
```

- *Type:* string

[Read] assurance:ListProjects.

---

##### `ListResourcesForControl`<sup>Required</sup> <a name="ListResourcesForControl" id="@cdk_utils/iam.assurance.AssuranceActions.property.ListResourcesForControl"></a>

```typescript
public readonly ListResourcesForControl: string;
```

- *Type:* string

[Read] assurance:ListResourcesForControl.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.assurance.AssuranceActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] assurance:ListTagsForResource.

---

##### `ListTaskHistory`<sup>Required</sup> <a name="ListTaskHistory" id="@cdk_utils/iam.assurance.AssuranceActions.property.ListTaskHistory"></a>

```typescript
public readonly ListTaskHistory: string;
```

- *Type:* string

[Read] assurance:ListTaskHistory.

---

##### `ListTasks`<sup>Required</sup> <a name="ListTasks" id="@cdk_utils/iam.assurance.AssuranceActions.property.ListTasks"></a>

```typescript
public readonly ListTasks: string;
```

- *Type:* string

[Read] assurance:ListTasks.

---

##### `PublishFramework`<sup>Required</sup> <a name="PublishFramework" id="@cdk_utils/iam.assurance.AssuranceActions.property.PublishFramework"></a>

```typescript
public readonly PublishFramework: string;
```

- *Type:* string

[Write] assurance:PublishFramework.

---

##### `PutControlStatusOverride`<sup>Required</sup> <a name="PutControlStatusOverride" id="@cdk_utils/iam.assurance.AssuranceActions.property.PutControlStatusOverride"></a>

```typescript
public readonly PutControlStatusOverride: string;
```

- *Type:* string

[Write] assurance:PutControlStatusOverride.

---

##### `PutEvidence`<sup>Required</sup> <a name="PutEvidence" id="@cdk_utils/iam.assurance.AssuranceActions.property.PutEvidence"></a>

```typescript
public readonly PutEvidence: string;
```

- *Type:* string

[Write] assurance:PutEvidence.

---

##### `RegisterOrganizationDelegatedAdmin`<sup>Required</sup> <a name="RegisterOrganizationDelegatedAdmin" id="@cdk_utils/iam.assurance.AssuranceActions.property.RegisterOrganizationDelegatedAdmin"></a>

```typescript
public readonly RegisterOrganizationDelegatedAdmin: string;
```

- *Type:* string

[Write] assurance:RegisterOrganizationDelegatedAdmin.

---

##### `RejectInvitation`<sup>Required</sup> <a name="RejectInvitation" id="@cdk_utils/iam.assurance.AssuranceActions.property.RejectInvitation"></a>

```typescript
public readonly RejectInvitation: string;
```

- *Type:* string

[Write] assurance:RejectInvitation.

---

##### `RevokePermissionSet`<sup>Required</sup> <a name="RevokePermissionSet" id="@cdk_utils/iam.assurance.AssuranceActions.property.RevokePermissionSet"></a>

```typescript
public readonly RevokePermissionSet: string;
```

- *Type:* string

[Write] assurance:RevokePermissionSet.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.assurance.AssuranceActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartAssessment`<sup>Required</sup> <a name="StartAssessment" id="@cdk_utils/iam.assurance.AssuranceActions.property.StartAssessment"></a>

```typescript
public readonly StartAssessment: string;
```

- *Type:* string

[Write] assurance:StartAssessment.

---

##### `StartAssessmentReportExport`<sup>Required</sup> <a name="StartAssessmentReportExport" id="@cdk_utils/iam.assurance.AssuranceActions.property.StartAssessmentReportExport"></a>

```typescript
public readonly StartAssessmentReportExport: string;
```

- *Type:* string

[Write] assurance:StartAssessmentReportExport.

---

##### `StartResourceDiscovery`<sup>Required</sup> <a name="StartResourceDiscovery" id="@cdk_utils/iam.assurance.AssuranceActions.property.StartResourceDiscovery"></a>

```typescript
public readonly StartResourceDiscovery: string;
```

- *Type:* string

[Write] assurance:StartResourceDiscovery.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.assurance.AssuranceActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] assurance:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.assurance.AssuranceActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] assurance:UntagResource.

---

##### `UpdateAnnotation`<sup>Required</sup> <a name="UpdateAnnotation" id="@cdk_utils/iam.assurance.AssuranceActions.property.UpdateAnnotation"></a>

```typescript
public readonly UpdateAnnotation: string;
```

- *Type:* string

[Write] assurance:UpdateAnnotation.

---

##### `UpdateAssessment`<sup>Required</sup> <a name="UpdateAssessment" id="@cdk_utils/iam.assurance.AssuranceActions.property.UpdateAssessment"></a>

```typescript
public readonly UpdateAssessment: string;
```

- *Type:* string

[Write] assurance:UpdateAssessment.

---

##### `UpdateComment`<sup>Required</sup> <a name="UpdateComment" id="@cdk_utils/iam.assurance.AssuranceActions.property.UpdateComment"></a>

```typescript
public readonly UpdateComment: string;
```

- *Type:* string

[Write] assurance:UpdateComment.

---

##### `UpdateControl`<sup>Required</sup> <a name="UpdateControl" id="@cdk_utils/iam.assurance.AssuranceActions.property.UpdateControl"></a>

```typescript
public readonly UpdateControl: string;
```

- *Type:* string

[Write] assurance:UpdateControl.

---

##### `UpdateControlGroup`<sup>Required</sup> <a name="UpdateControlGroup" id="@cdk_utils/iam.assurance.AssuranceActions.property.UpdateControlGroup"></a>

```typescript
public readonly UpdateControlGroup: string;
```

- *Type:* string

[Write] assurance:UpdateControlGroup.

---

##### `UpdateEnvironment`<sup>Required</sup> <a name="UpdateEnvironment" id="@cdk_utils/iam.assurance.AssuranceActions.property.UpdateEnvironment"></a>

```typescript
public readonly UpdateEnvironment: string;
```

- *Type:* string

[Write] assurance:UpdateEnvironment.

---

##### `UpdateEvidence`<sup>Required</sup> <a name="UpdateEvidence" id="@cdk_utils/iam.assurance.AssuranceActions.property.UpdateEvidence"></a>

```typescript
public readonly UpdateEvidence: string;
```

- *Type:* string

[Write] assurance:UpdateEvidence.

---

##### `UpdateFramework`<sup>Required</sup> <a name="UpdateFramework" id="@cdk_utils/iam.assurance.AssuranceActions.property.UpdateFramework"></a>

```typescript
public readonly UpdateFramework: string;
```

- *Type:* string

[Write] assurance:UpdateFramework.

---

##### `UpdatePermissionSet`<sup>Required</sup> <a name="UpdatePermissionSet" id="@cdk_utils/iam.assurance.AssuranceActions.property.UpdatePermissionSet"></a>

```typescript
public readonly UpdatePermissionSet: string;
```

- *Type:* string

[Write] assurance:UpdatePermissionSet.

---

##### `UpdateProject`<sup>Required</sup> <a name="UpdateProject" id="@cdk_utils/iam.assurance.AssuranceActions.property.UpdateProject"></a>

```typescript
public readonly UpdateProject: string;
```

- *Type:* string

[Write] assurance:UpdateProject.

---

##### `UpdateTask`<sup>Required</sup> <a name="UpdateTask" id="@cdk_utils/iam.assurance.AssuranceActions.property.UpdateTask"></a>

```typescript
public readonly UpdateTask: string;
```

- *Type:* string

[Write] assurance:UpdateTask.

---

##### `UploadEvidence`<sup>Required</sup> <a name="UploadEvidence" id="@cdk_utils/iam.assurance.AssuranceActions.property.UploadEvidence"></a>

```typescript
public readonly UploadEvidence: string;
```

- *Type:* string

[Write] assurance:UploadEvidence.

---

##### `VendConnectionAccessToken`<sup>Required</sup> <a name="VendConnectionAccessToken" id="@cdk_utils/iam.assurance.AssuranceActions.property.VendConnectionAccessToken"></a>

```typescript
public readonly VendConnectionAccessToken: string;
```

- *Type:* string

[Write] assurance:VendConnectionAccessToken.

---

### AssuranceConditions <a name="AssuranceConditions" id="@cdk_utils/iam.assurance.AssuranceConditions"></a>

Condition key constants and builders for assurance.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.assurance.AssuranceConditions.Initializer"></a>

```typescript
import { assurance } from '@cdk_utils/iam'

new assurance.AssuranceConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.assurance.AssuranceConditions.requestTag"></a>

```typescript
import { assurance } from '@cdk_utils/iam'

assurance.AssuranceConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.assurance.AssuranceConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.assurance.AssuranceConditions.resourceTag"></a>

```typescript
import { assurance } from '@cdk_utils/iam'

assurance.AssuranceConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.assurance.AssuranceConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.assurance.AssuranceConditions.tagKeys"></a>

```typescript
import { assurance } from '@cdk_utils/iam'

assurance.AssuranceConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.assurance.AssuranceConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceConditions.property.CreateEnvironmentConditionKeys">CreateEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEnvironment action. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.assurance.AssuranceConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.assurance.AssuranceConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.assurance.AssuranceConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateEnvironmentConditionKeys`<sup>Required</sup> <a name="CreateEnvironmentConditionKeys" id="@cdk_utils/iam.assurance.AssuranceConditions.property.CreateEnvironmentConditionKeys"></a>

```typescript
public readonly CreateEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEnvironment action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.assurance.AssuranceConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.assurance.AssuranceConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### AssuranceResources <a name="AssuranceResources" id="@cdk_utils/iam.assurance.AssuranceResources"></a>

ARN builders, validators, and parsers for assurance resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.assurance.AssuranceResources.Initializer"></a>

```typescript
import { assurance } from '@cdk_utils/iam'

new assurance.AssuranceResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceResources.environment">environment</a></code> | Builds an ARN for the environment resource. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceResources.isValidEnvironmentArn">isValidEnvironmentArn</a></code> | Validates whether a string is a valid ARN for the environment resource. |
| <code><a href="#@cdk_utils/iam.assurance.AssuranceResources.parseEnvironmentArn">parseEnvironmentArn</a></code> | Parses a environment ARN into its components. |

---

##### `environment` <a name="environment" id="@cdk_utils/iam.assurance.AssuranceResources.environment"></a>

```typescript
import { assurance } from '@cdk_utils/iam'

assurance.AssuranceResources.environment(props: AssuranceEnvironmentArnProps)
```

Builds an ARN for the environment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.assurance.AssuranceResources.environment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.assurance.AssuranceEnvironmentArnProps">AssuranceEnvironmentArnProps</a>

---

##### `isValidEnvironmentArn` <a name="isValidEnvironmentArn" id="@cdk_utils/iam.assurance.AssuranceResources.isValidEnvironmentArn"></a>

```typescript
import { assurance } from '@cdk_utils/iam'

assurance.AssuranceResources.isValidEnvironmentArn(arn: string)
```

Validates whether a string is a valid ARN for the environment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.assurance.AssuranceResources.isValidEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEnvironmentArn` <a name="parseEnvironmentArn" id="@cdk_utils/iam.assurance.AssuranceResources.parseEnvironmentArn"></a>

```typescript
import { assurance } from '@cdk_utils/iam'

assurance.AssuranceResources.parseEnvironmentArn(arn: string)
```

Parses a environment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.assurance.AssuranceResources.parseEnvironmentArn.parameter.arn"></a>

- *Type:* string

---




