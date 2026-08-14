# `mechanicalturk` Submodule <a name="`mechanicalturk` Submodule" id="@cdk_utils/iam.mechanicalturk"></a>



## Classes <a name="Classes" id="Classes"></a>

### MechanicalturkActions <a name="MechanicalturkActions" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions"></a>

IAM action constants for the mechanicalturk service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.Initializer"></a>

```typescript
import { mechanicalturk } from '@cdk_utils/iam'

new mechanicalturk.MechanicalturkActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.AcceptQualificationRequest">AcceptQualificationRequest</a></code> | <code>string</code> | [Write] mechanicalturk:AcceptQualificationRequest. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.actionGetAccountBalance">actionGetAccountBalance</a></code> | <code>string</code> | [Read] mechanicalturk:GetAccountBalance. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.actionGetAssignment">actionGetAssignment</a></code> | <code>string</code> | [Read] mechanicalturk:GetAssignment. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.actionGetFileUploadURL">actionGetFileUploadURL</a></code> | <code>string</code> | [Read] mechanicalturk:GetFileUploadURL. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.actionGetHIT">actionGetHIT</a></code> | <code>string</code> | [Read] mechanicalturk:GetHIT. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.actionGetQualificationScore">actionGetQualificationScore</a></code> | <code>string</code> | [Read] mechanicalturk:GetQualificationScore. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.actionGetQualificationType">actionGetQualificationType</a></code> | <code>string</code> | [Read] mechanicalturk:GetQualificationType. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.ApproveAssignment">ApproveAssignment</a></code> | <code>string</code> | [Write] mechanicalturk:ApproveAssignment. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.AssociateQualificationWithWorker">AssociateQualificationWithWorker</a></code> | <code>string</code> | [Write] mechanicalturk:AssociateQualificationWithWorker. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.CreateAdditionalAssignmentsForHIT">CreateAdditionalAssignmentsForHIT</a></code> | <code>string</code> | [Write] mechanicalturk:CreateAdditionalAssignmentsForHIT. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.CreateHIT">CreateHIT</a></code> | <code>string</code> | [Write] mechanicalturk:CreateHIT. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.CreateHITType">CreateHITType</a></code> | <code>string</code> | [Write] mechanicalturk:CreateHITType. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.CreateHITWithHITType">CreateHITWithHITType</a></code> | <code>string</code> | [Write] mechanicalturk:CreateHITWithHITType. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.CreateQualificationType">CreateQualificationType</a></code> | <code>string</code> | [Write] mechanicalturk:CreateQualificationType. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.CreateWorkerBlock">CreateWorkerBlock</a></code> | <code>string</code> | [Write] mechanicalturk:CreateWorkerBlock. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.DeleteHIT">DeleteHIT</a></code> | <code>string</code> | [Write] mechanicalturk:DeleteHIT. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.DeleteQualificationType">DeleteQualificationType</a></code> | <code>string</code> | [Write] mechanicalturk:DeleteQualificationType. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.DeleteWorkerBlock">DeleteWorkerBlock</a></code> | <code>string</code> | [Write] mechanicalturk:DeleteWorkerBlock. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.DisassociateQualificationFromWorker">DisassociateQualificationFromWorker</a></code> | <code>string</code> | [Write] mechanicalturk:DisassociateQualificationFromWorker. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.ListAssignmentsForHIT">ListAssignmentsForHIT</a></code> | <code>string</code> | [List] mechanicalturk:ListAssignmentsForHIT. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.ListBonusPayments">ListBonusPayments</a></code> | <code>string</code> | [List] mechanicalturk:ListBonusPayments. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.ListHITs">ListHITs</a></code> | <code>string</code> | [List] mechanicalturk:ListHITs. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.ListHITsForQualificationType">ListHITsForQualificationType</a></code> | <code>string</code> | [List] mechanicalturk:ListHITsForQualificationType. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.ListQualificationRequests">ListQualificationRequests</a></code> | <code>string</code> | [List] mechanicalturk:ListQualificationRequests. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.ListQualificationTypes">ListQualificationTypes</a></code> | <code>string</code> | [List] mechanicalturk:ListQualificationTypes. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.ListReviewableHITs">ListReviewableHITs</a></code> | <code>string</code> | [List] mechanicalturk:ListReviewableHITs. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.ListReviewPolicyResultsForHIT">ListReviewPolicyResultsForHIT</a></code> | <code>string</code> | [List] mechanicalturk:ListReviewPolicyResultsForHIT. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.ListWorkerBlocks">ListWorkerBlocks</a></code> | <code>string</code> | [List] mechanicalturk:ListWorkerBlocks. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.ListWorkersWithQualificationType">ListWorkersWithQualificationType</a></code> | <code>string</code> | [List] mechanicalturk:ListWorkersWithQualificationType. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.NotifyWorkers">NotifyWorkers</a></code> | <code>string</code> | [Write] mechanicalturk:NotifyWorkers. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.RejectAssignment">RejectAssignment</a></code> | <code>string</code> | [Write] mechanicalturk:RejectAssignment. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.RejectQualificationRequest">RejectQualificationRequest</a></code> | <code>string</code> | [Write] mechanicalturk:RejectQualificationRequest. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.SendBonus">SendBonus</a></code> | <code>string</code> | [Write] mechanicalturk:SendBonus. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.SendTestEventNotification">SendTestEventNotification</a></code> | <code>string</code> | [Write] mechanicalturk:SendTestEventNotification. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.UpdateExpirationForHIT">UpdateExpirationForHIT</a></code> | <code>string</code> | [Write] mechanicalturk:UpdateExpirationForHIT. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.UpdateHITReviewStatus">UpdateHITReviewStatus</a></code> | <code>string</code> | [Write] mechanicalturk:UpdateHITReviewStatus. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.UpdateHITTypeOfHIT">UpdateHITTypeOfHIT</a></code> | <code>string</code> | [Write] mechanicalturk:UpdateHITTypeOfHIT. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.UpdateNotificationSettings">UpdateNotificationSettings</a></code> | <code>string</code> | [Write] mechanicalturk:UpdateNotificationSettings. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.UpdateQualificationType">UpdateQualificationType</a></code> | <code>string</code> | [Write] mechanicalturk:UpdateQualificationType. |

---

##### `AcceptQualificationRequest`<sup>Required</sup> <a name="AcceptQualificationRequest" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.AcceptQualificationRequest"></a>

```typescript
public readonly AcceptQualificationRequest: string;
```

- *Type:* string

[Write] mechanicalturk:AcceptQualificationRequest.

---

##### `actionGetAccountBalance`<sup>Required</sup> <a name="actionGetAccountBalance" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.actionGetAccountBalance"></a>

```typescript
public readonly actionGetAccountBalance: string;
```

- *Type:* string

[Read] mechanicalturk:GetAccountBalance.

---

##### `actionGetAssignment`<sup>Required</sup> <a name="actionGetAssignment" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.actionGetAssignment"></a>

```typescript
public readonly actionGetAssignment: string;
```

- *Type:* string

[Read] mechanicalturk:GetAssignment.

---

##### `actionGetFileUploadURL`<sup>Required</sup> <a name="actionGetFileUploadURL" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.actionGetFileUploadURL"></a>

```typescript
public readonly actionGetFileUploadURL: string;
```

- *Type:* string

[Read] mechanicalturk:GetFileUploadURL.

---

##### `actionGetHIT`<sup>Required</sup> <a name="actionGetHIT" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.actionGetHIT"></a>

```typescript
public readonly actionGetHIT: string;
```

- *Type:* string

[Read] mechanicalturk:GetHIT.

---

##### `actionGetQualificationScore`<sup>Required</sup> <a name="actionGetQualificationScore" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.actionGetQualificationScore"></a>

```typescript
public readonly actionGetQualificationScore: string;
```

- *Type:* string

[Read] mechanicalturk:GetQualificationScore.

---

##### `actionGetQualificationType`<sup>Required</sup> <a name="actionGetQualificationType" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.actionGetQualificationType"></a>

```typescript
public readonly actionGetQualificationType: string;
```

- *Type:* string

[Read] mechanicalturk:GetQualificationType.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ApproveAssignment`<sup>Required</sup> <a name="ApproveAssignment" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.ApproveAssignment"></a>

```typescript
public readonly ApproveAssignment: string;
```

- *Type:* string

[Write] mechanicalturk:ApproveAssignment.

---

##### `AssociateQualificationWithWorker`<sup>Required</sup> <a name="AssociateQualificationWithWorker" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.AssociateQualificationWithWorker"></a>

```typescript
public readonly AssociateQualificationWithWorker: string;
```

- *Type:* string

[Write] mechanicalturk:AssociateQualificationWithWorker.

---

##### `CreateAdditionalAssignmentsForHIT`<sup>Required</sup> <a name="CreateAdditionalAssignmentsForHIT" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.CreateAdditionalAssignmentsForHIT"></a>

```typescript
public readonly CreateAdditionalAssignmentsForHIT: string;
```

- *Type:* string

[Write] mechanicalturk:CreateAdditionalAssignmentsForHIT.

---

##### `CreateHIT`<sup>Required</sup> <a name="CreateHIT" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.CreateHIT"></a>

```typescript
public readonly CreateHIT: string;
```

- *Type:* string

[Write] mechanicalturk:CreateHIT.

---

##### `CreateHITType`<sup>Required</sup> <a name="CreateHITType" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.CreateHITType"></a>

```typescript
public readonly CreateHITType: string;
```

- *Type:* string

[Write] mechanicalturk:CreateHITType.

---

##### `CreateHITWithHITType`<sup>Required</sup> <a name="CreateHITWithHITType" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.CreateHITWithHITType"></a>

```typescript
public readonly CreateHITWithHITType: string;
```

- *Type:* string

[Write] mechanicalturk:CreateHITWithHITType.

---

##### `CreateQualificationType`<sup>Required</sup> <a name="CreateQualificationType" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.CreateQualificationType"></a>

```typescript
public readonly CreateQualificationType: string;
```

- *Type:* string

[Write] mechanicalturk:CreateQualificationType.

---

##### `CreateWorkerBlock`<sup>Required</sup> <a name="CreateWorkerBlock" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.CreateWorkerBlock"></a>

```typescript
public readonly CreateWorkerBlock: string;
```

- *Type:* string

[Write] mechanicalturk:CreateWorkerBlock.

---

##### `DeleteHIT`<sup>Required</sup> <a name="DeleteHIT" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.DeleteHIT"></a>

```typescript
public readonly DeleteHIT: string;
```

- *Type:* string

[Write] mechanicalturk:DeleteHIT.

---

##### `DeleteQualificationType`<sup>Required</sup> <a name="DeleteQualificationType" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.DeleteQualificationType"></a>

```typescript
public readonly DeleteQualificationType: string;
```

- *Type:* string

[Write] mechanicalturk:DeleteQualificationType.

---

##### `DeleteWorkerBlock`<sup>Required</sup> <a name="DeleteWorkerBlock" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.DeleteWorkerBlock"></a>

```typescript
public readonly DeleteWorkerBlock: string;
```

- *Type:* string

[Write] mechanicalturk:DeleteWorkerBlock.

---

##### `DisassociateQualificationFromWorker`<sup>Required</sup> <a name="DisassociateQualificationFromWorker" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.DisassociateQualificationFromWorker"></a>

```typescript
public readonly DisassociateQualificationFromWorker: string;
```

- *Type:* string

[Write] mechanicalturk:DisassociateQualificationFromWorker.

---

##### `ListAssignmentsForHIT`<sup>Required</sup> <a name="ListAssignmentsForHIT" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.ListAssignmentsForHIT"></a>

```typescript
public readonly ListAssignmentsForHIT: string;
```

- *Type:* string

[List] mechanicalturk:ListAssignmentsForHIT.

---

##### `ListBonusPayments`<sup>Required</sup> <a name="ListBonusPayments" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.ListBonusPayments"></a>

```typescript
public readonly ListBonusPayments: string;
```

- *Type:* string

[List] mechanicalturk:ListBonusPayments.

---

##### `ListHITs`<sup>Required</sup> <a name="ListHITs" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.ListHITs"></a>

```typescript
public readonly ListHITs: string;
```

- *Type:* string

[List] mechanicalturk:ListHITs.

---

##### `ListHITsForQualificationType`<sup>Required</sup> <a name="ListHITsForQualificationType" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.ListHITsForQualificationType"></a>

```typescript
public readonly ListHITsForQualificationType: string;
```

- *Type:* string

[List] mechanicalturk:ListHITsForQualificationType.

---

##### `ListQualificationRequests`<sup>Required</sup> <a name="ListQualificationRequests" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.ListQualificationRequests"></a>

```typescript
public readonly ListQualificationRequests: string;
```

- *Type:* string

[List] mechanicalturk:ListQualificationRequests.

---

##### `ListQualificationTypes`<sup>Required</sup> <a name="ListQualificationTypes" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.ListQualificationTypes"></a>

```typescript
public readonly ListQualificationTypes: string;
```

- *Type:* string

[List] mechanicalturk:ListQualificationTypes.

---

##### `ListReviewableHITs`<sup>Required</sup> <a name="ListReviewableHITs" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.ListReviewableHITs"></a>

```typescript
public readonly ListReviewableHITs: string;
```

- *Type:* string

[List] mechanicalturk:ListReviewableHITs.

---

##### `ListReviewPolicyResultsForHIT`<sup>Required</sup> <a name="ListReviewPolicyResultsForHIT" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.ListReviewPolicyResultsForHIT"></a>

```typescript
public readonly ListReviewPolicyResultsForHIT: string;
```

- *Type:* string

[List] mechanicalturk:ListReviewPolicyResultsForHIT.

---

##### `ListWorkerBlocks`<sup>Required</sup> <a name="ListWorkerBlocks" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.ListWorkerBlocks"></a>

```typescript
public readonly ListWorkerBlocks: string;
```

- *Type:* string

[List] mechanicalturk:ListWorkerBlocks.

---

##### `ListWorkersWithQualificationType`<sup>Required</sup> <a name="ListWorkersWithQualificationType" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.ListWorkersWithQualificationType"></a>

```typescript
public readonly ListWorkersWithQualificationType: string;
```

- *Type:* string

[List] mechanicalturk:ListWorkersWithQualificationType.

---

##### `NotifyWorkers`<sup>Required</sup> <a name="NotifyWorkers" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.NotifyWorkers"></a>

```typescript
public readonly NotifyWorkers: string;
```

- *Type:* string

[Write] mechanicalturk:NotifyWorkers.

---

##### `RejectAssignment`<sup>Required</sup> <a name="RejectAssignment" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.RejectAssignment"></a>

```typescript
public readonly RejectAssignment: string;
```

- *Type:* string

[Write] mechanicalturk:RejectAssignment.

---

##### `RejectQualificationRequest`<sup>Required</sup> <a name="RejectQualificationRequest" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.RejectQualificationRequest"></a>

```typescript
public readonly RejectQualificationRequest: string;
```

- *Type:* string

[Write] mechanicalturk:RejectQualificationRequest.

---

##### `SendBonus`<sup>Required</sup> <a name="SendBonus" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.SendBonus"></a>

```typescript
public readonly SendBonus: string;
```

- *Type:* string

[Write] mechanicalturk:SendBonus.

---

##### `SendTestEventNotification`<sup>Required</sup> <a name="SendTestEventNotification" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.SendTestEventNotification"></a>

```typescript
public readonly SendTestEventNotification: string;
```

- *Type:* string

[Write] mechanicalturk:SendTestEventNotification.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UpdateExpirationForHIT`<sup>Required</sup> <a name="UpdateExpirationForHIT" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.UpdateExpirationForHIT"></a>

```typescript
public readonly UpdateExpirationForHIT: string;
```

- *Type:* string

[Write] mechanicalturk:UpdateExpirationForHIT.

---

##### `UpdateHITReviewStatus`<sup>Required</sup> <a name="UpdateHITReviewStatus" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.UpdateHITReviewStatus"></a>

```typescript
public readonly UpdateHITReviewStatus: string;
```

- *Type:* string

[Write] mechanicalturk:UpdateHITReviewStatus.

---

##### `UpdateHITTypeOfHIT`<sup>Required</sup> <a name="UpdateHITTypeOfHIT" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.UpdateHITTypeOfHIT"></a>

```typescript
public readonly UpdateHITTypeOfHIT: string;
```

- *Type:* string

[Write] mechanicalturk:UpdateHITTypeOfHIT.

---

##### `UpdateNotificationSettings`<sup>Required</sup> <a name="UpdateNotificationSettings" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.UpdateNotificationSettings"></a>

```typescript
public readonly UpdateNotificationSettings: string;
```

- *Type:* string

[Write] mechanicalturk:UpdateNotificationSettings.

---

##### `UpdateQualificationType`<sup>Required</sup> <a name="UpdateQualificationType" id="@cdk_utils/iam.mechanicalturk.MechanicalturkActions.property.UpdateQualificationType"></a>

```typescript
public readonly UpdateQualificationType: string;
```

- *Type:* string

[Write] mechanicalturk:UpdateQualificationType.

---

### MechanicalturkOperations <a name="MechanicalturkOperations" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations"></a>

API operation to required IAM actions mapping for mechanicalturk.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.Initializer"></a>

```typescript
import { mechanicalturk } from '@cdk_utils/iam'

new mechanicalturk.MechanicalturkOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.AcceptQualificationRequest">AcceptQualificationRequest</a></code> | <code>string[]</code> | IAM actions required for the AcceptQualificationRequest API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.ApproveAssignment">ApproveAssignment</a></code> | <code>string[]</code> | IAM actions required for the ApproveAssignment API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.AssociateQualificationWithWorker">AssociateQualificationWithWorker</a></code> | <code>string[]</code> | IAM actions required for the AssociateQualificationWithWorker API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.CreateAdditionalAssignmentsForHIT">CreateAdditionalAssignmentsForHIT</a></code> | <code>string[]</code> | IAM actions required for the CreateAdditionalAssignmentsForHIT API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.CreateHIT">CreateHIT</a></code> | <code>string[]</code> | IAM actions required for the CreateHIT API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.CreateHITType">CreateHITType</a></code> | <code>string[]</code> | IAM actions required for the CreateHITType API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.CreateHITWithHITType">CreateHITWithHITType</a></code> | <code>string[]</code> | IAM actions required for the CreateHITWithHITType API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.CreateQualificationType">CreateQualificationType</a></code> | <code>string[]</code> | IAM actions required for the CreateQualificationType API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.CreateWorkerBlock">CreateWorkerBlock</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkerBlock API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.DeleteHIT">DeleteHIT</a></code> | <code>string[]</code> | IAM actions required for the DeleteHIT API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.DeleteQualificationType">DeleteQualificationType</a></code> | <code>string[]</code> | IAM actions required for the DeleteQualificationType API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.DeleteWorkerBlock">DeleteWorkerBlock</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkerBlock API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.DisassociateQualificationFromWorker">DisassociateQualificationFromWorker</a></code> | <code>string[]</code> | IAM actions required for the DisassociateQualificationFromWorker API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.ListAssignmentsForHIT">ListAssignmentsForHIT</a></code> | <code>string[]</code> | IAM actions required for the ListAssignmentsForHIT API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.ListBonusPayments">ListBonusPayments</a></code> | <code>string[]</code> | IAM actions required for the ListBonusPayments API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.ListHITs">ListHITs</a></code> | <code>string[]</code> | IAM actions required for the ListHITs API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.ListHITsForQualificationType">ListHITsForQualificationType</a></code> | <code>string[]</code> | IAM actions required for the ListHITsForQualificationType API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.ListQualificationRequests">ListQualificationRequests</a></code> | <code>string[]</code> | IAM actions required for the ListQualificationRequests API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.ListQualificationTypes">ListQualificationTypes</a></code> | <code>string[]</code> | IAM actions required for the ListQualificationTypes API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.ListReviewableHITs">ListReviewableHITs</a></code> | <code>string[]</code> | IAM actions required for the ListReviewableHITs API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.ListReviewPolicyResultsForHIT">ListReviewPolicyResultsForHIT</a></code> | <code>string[]</code> | IAM actions required for the ListReviewPolicyResultsForHIT API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.ListWorkerBlocks">ListWorkerBlocks</a></code> | <code>string[]</code> | IAM actions required for the ListWorkerBlocks API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.ListWorkersWithQualificationType">ListWorkersWithQualificationType</a></code> | <code>string[]</code> | IAM actions required for the ListWorkersWithQualificationType API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.NotifyWorkers">NotifyWorkers</a></code> | <code>string[]</code> | IAM actions required for the NotifyWorkers API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.opGetAccountBalance">opGetAccountBalance</a></code> | <code>string[]</code> | IAM actions required for the GetAccountBalance API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.opGetAssignment">opGetAssignment</a></code> | <code>string[]</code> | IAM actions required for the GetAssignment API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.opGetFileUploadURL">opGetFileUploadURL</a></code> | <code>string[]</code> | IAM actions required for the GetFileUploadURL API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.opGetHIT">opGetHIT</a></code> | <code>string[]</code> | IAM actions required for the GetHIT API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.opGetQualificationScore">opGetQualificationScore</a></code> | <code>string[]</code> | IAM actions required for the GetQualificationScore API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.opGetQualificationType">opGetQualificationType</a></code> | <code>string[]</code> | IAM actions required for the GetQualificationType API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.RejectAssignment">RejectAssignment</a></code> | <code>string[]</code> | IAM actions required for the RejectAssignment API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.RejectQualificationRequest">RejectQualificationRequest</a></code> | <code>string[]</code> | IAM actions required for the RejectQualificationRequest API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.SendBonus">SendBonus</a></code> | <code>string[]</code> | IAM actions required for the SendBonus API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.SendTestEventNotification">SendTestEventNotification</a></code> | <code>string[]</code> | IAM actions required for the SendTestEventNotification API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.UpdateExpirationForHIT">UpdateExpirationForHIT</a></code> | <code>string[]</code> | IAM actions required for the UpdateExpirationForHIT API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.UpdateHITReviewStatus">UpdateHITReviewStatus</a></code> | <code>string[]</code> | IAM actions required for the UpdateHITReviewStatus API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.UpdateHITTypeOfHIT">UpdateHITTypeOfHIT</a></code> | <code>string[]</code> | IAM actions required for the UpdateHITTypeOfHIT API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.UpdateNotificationSettings">UpdateNotificationSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateNotificationSettings API call. |
| <code><a href="#@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.UpdateQualificationType">UpdateQualificationType</a></code> | <code>string[]</code> | IAM actions required for the UpdateQualificationType API call. |

---

##### `AcceptQualificationRequest`<sup>Required</sup> <a name="AcceptQualificationRequest" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.AcceptQualificationRequest"></a>

```typescript
public readonly AcceptQualificationRequest: string[];
```

- *Type:* string[]

IAM actions required for the AcceptQualificationRequest API call.

---

##### `ApproveAssignment`<sup>Required</sup> <a name="ApproveAssignment" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.ApproveAssignment"></a>

```typescript
public readonly ApproveAssignment: string[];
```

- *Type:* string[]

IAM actions required for the ApproveAssignment API call.

---

##### `AssociateQualificationWithWorker`<sup>Required</sup> <a name="AssociateQualificationWithWorker" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.AssociateQualificationWithWorker"></a>

```typescript
public readonly AssociateQualificationWithWorker: string[];
```

- *Type:* string[]

IAM actions required for the AssociateQualificationWithWorker API call.

---

##### `CreateAdditionalAssignmentsForHIT`<sup>Required</sup> <a name="CreateAdditionalAssignmentsForHIT" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.CreateAdditionalAssignmentsForHIT"></a>

```typescript
public readonly CreateAdditionalAssignmentsForHIT: string[];
```

- *Type:* string[]

IAM actions required for the CreateAdditionalAssignmentsForHIT API call.

---

##### `CreateHIT`<sup>Required</sup> <a name="CreateHIT" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.CreateHIT"></a>

```typescript
public readonly CreateHIT: string[];
```

- *Type:* string[]

IAM actions required for the CreateHIT API call.

---

##### `CreateHITType`<sup>Required</sup> <a name="CreateHITType" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.CreateHITType"></a>

```typescript
public readonly CreateHITType: string[];
```

- *Type:* string[]

IAM actions required for the CreateHITType API call.

---

##### `CreateHITWithHITType`<sup>Required</sup> <a name="CreateHITWithHITType" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.CreateHITWithHITType"></a>

```typescript
public readonly CreateHITWithHITType: string[];
```

- *Type:* string[]

IAM actions required for the CreateHITWithHITType API call.

---

##### `CreateQualificationType`<sup>Required</sup> <a name="CreateQualificationType" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.CreateQualificationType"></a>

```typescript
public readonly CreateQualificationType: string[];
```

- *Type:* string[]

IAM actions required for the CreateQualificationType API call.

---

##### `CreateWorkerBlock`<sup>Required</sup> <a name="CreateWorkerBlock" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.CreateWorkerBlock"></a>

```typescript
public readonly CreateWorkerBlock: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkerBlock API call.

---

##### `DeleteHIT`<sup>Required</sup> <a name="DeleteHIT" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.DeleteHIT"></a>

```typescript
public readonly DeleteHIT: string[];
```

- *Type:* string[]

IAM actions required for the DeleteHIT API call.

---

##### `DeleteQualificationType`<sup>Required</sup> <a name="DeleteQualificationType" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.DeleteQualificationType"></a>

```typescript
public readonly DeleteQualificationType: string[];
```

- *Type:* string[]

IAM actions required for the DeleteQualificationType API call.

---

##### `DeleteWorkerBlock`<sup>Required</sup> <a name="DeleteWorkerBlock" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.DeleteWorkerBlock"></a>

```typescript
public readonly DeleteWorkerBlock: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkerBlock API call.

---

##### `DisassociateQualificationFromWorker`<sup>Required</sup> <a name="DisassociateQualificationFromWorker" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.DisassociateQualificationFromWorker"></a>

```typescript
public readonly DisassociateQualificationFromWorker: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateQualificationFromWorker API call.

---

##### `ListAssignmentsForHIT`<sup>Required</sup> <a name="ListAssignmentsForHIT" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.ListAssignmentsForHIT"></a>

```typescript
public readonly ListAssignmentsForHIT: string[];
```

- *Type:* string[]

IAM actions required for the ListAssignmentsForHIT API call.

---

##### `ListBonusPayments`<sup>Required</sup> <a name="ListBonusPayments" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.ListBonusPayments"></a>

```typescript
public readonly ListBonusPayments: string[];
```

- *Type:* string[]

IAM actions required for the ListBonusPayments API call.

---

##### `ListHITs`<sup>Required</sup> <a name="ListHITs" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.ListHITs"></a>

```typescript
public readonly ListHITs: string[];
```

- *Type:* string[]

IAM actions required for the ListHITs API call.

---

##### `ListHITsForQualificationType`<sup>Required</sup> <a name="ListHITsForQualificationType" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.ListHITsForQualificationType"></a>

```typescript
public readonly ListHITsForQualificationType: string[];
```

- *Type:* string[]

IAM actions required for the ListHITsForQualificationType API call.

---

##### `ListQualificationRequests`<sup>Required</sup> <a name="ListQualificationRequests" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.ListQualificationRequests"></a>

```typescript
public readonly ListQualificationRequests: string[];
```

- *Type:* string[]

IAM actions required for the ListQualificationRequests API call.

---

##### `ListQualificationTypes`<sup>Required</sup> <a name="ListQualificationTypes" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.ListQualificationTypes"></a>

```typescript
public readonly ListQualificationTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListQualificationTypes API call.

---

##### `ListReviewableHITs`<sup>Required</sup> <a name="ListReviewableHITs" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.ListReviewableHITs"></a>

```typescript
public readonly ListReviewableHITs: string[];
```

- *Type:* string[]

IAM actions required for the ListReviewableHITs API call.

---

##### `ListReviewPolicyResultsForHIT`<sup>Required</sup> <a name="ListReviewPolicyResultsForHIT" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.ListReviewPolicyResultsForHIT"></a>

```typescript
public readonly ListReviewPolicyResultsForHIT: string[];
```

- *Type:* string[]

IAM actions required for the ListReviewPolicyResultsForHIT API call.

---

##### `ListWorkerBlocks`<sup>Required</sup> <a name="ListWorkerBlocks" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.ListWorkerBlocks"></a>

```typescript
public readonly ListWorkerBlocks: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkerBlocks API call.

---

##### `ListWorkersWithQualificationType`<sup>Required</sup> <a name="ListWorkersWithQualificationType" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.ListWorkersWithQualificationType"></a>

```typescript
public readonly ListWorkersWithQualificationType: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkersWithQualificationType API call.

---

##### `NotifyWorkers`<sup>Required</sup> <a name="NotifyWorkers" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.NotifyWorkers"></a>

```typescript
public readonly NotifyWorkers: string[];
```

- *Type:* string[]

IAM actions required for the NotifyWorkers API call.

---

##### `opGetAccountBalance`<sup>Required</sup> <a name="opGetAccountBalance" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.opGetAccountBalance"></a>

```typescript
public readonly opGetAccountBalance: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountBalance API call.

---

##### `opGetAssignment`<sup>Required</sup> <a name="opGetAssignment" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.opGetAssignment"></a>

```typescript
public readonly opGetAssignment: string[];
```

- *Type:* string[]

IAM actions required for the GetAssignment API call.

---

##### `opGetFileUploadURL`<sup>Required</sup> <a name="opGetFileUploadURL" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.opGetFileUploadURL"></a>

```typescript
public readonly opGetFileUploadURL: string[];
```

- *Type:* string[]

IAM actions required for the GetFileUploadURL API call.

---

##### `opGetHIT`<sup>Required</sup> <a name="opGetHIT" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.opGetHIT"></a>

```typescript
public readonly opGetHIT: string[];
```

- *Type:* string[]

IAM actions required for the GetHIT API call.

---

##### `opGetQualificationScore`<sup>Required</sup> <a name="opGetQualificationScore" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.opGetQualificationScore"></a>

```typescript
public readonly opGetQualificationScore: string[];
```

- *Type:* string[]

IAM actions required for the GetQualificationScore API call.

---

##### `opGetQualificationType`<sup>Required</sup> <a name="opGetQualificationType" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.opGetQualificationType"></a>

```typescript
public readonly opGetQualificationType: string[];
```

- *Type:* string[]

IAM actions required for the GetQualificationType API call.

---

##### `RejectAssignment`<sup>Required</sup> <a name="RejectAssignment" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.RejectAssignment"></a>

```typescript
public readonly RejectAssignment: string[];
```

- *Type:* string[]

IAM actions required for the RejectAssignment API call.

---

##### `RejectQualificationRequest`<sup>Required</sup> <a name="RejectQualificationRequest" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.RejectQualificationRequest"></a>

```typescript
public readonly RejectQualificationRequest: string[];
```

- *Type:* string[]

IAM actions required for the RejectQualificationRequest API call.

---

##### `SendBonus`<sup>Required</sup> <a name="SendBonus" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.SendBonus"></a>

```typescript
public readonly SendBonus: string[];
```

- *Type:* string[]

IAM actions required for the SendBonus API call.

---

##### `SendTestEventNotification`<sup>Required</sup> <a name="SendTestEventNotification" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.SendTestEventNotification"></a>

```typescript
public readonly SendTestEventNotification: string[];
```

- *Type:* string[]

IAM actions required for the SendTestEventNotification API call.

---

##### `UpdateExpirationForHIT`<sup>Required</sup> <a name="UpdateExpirationForHIT" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.UpdateExpirationForHIT"></a>

```typescript
public readonly UpdateExpirationForHIT: string[];
```

- *Type:* string[]

IAM actions required for the UpdateExpirationForHIT API call.

---

##### `UpdateHITReviewStatus`<sup>Required</sup> <a name="UpdateHITReviewStatus" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.UpdateHITReviewStatus"></a>

```typescript
public readonly UpdateHITReviewStatus: string[];
```

- *Type:* string[]

IAM actions required for the UpdateHITReviewStatus API call.

---

##### `UpdateHITTypeOfHIT`<sup>Required</sup> <a name="UpdateHITTypeOfHIT" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.UpdateHITTypeOfHIT"></a>

```typescript
public readonly UpdateHITTypeOfHIT: string[];
```

- *Type:* string[]

IAM actions required for the UpdateHITTypeOfHIT API call.

---

##### `UpdateNotificationSettings`<sup>Required</sup> <a name="UpdateNotificationSettings" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.UpdateNotificationSettings"></a>

```typescript
public readonly UpdateNotificationSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNotificationSettings API call.

---

##### `UpdateQualificationType`<sup>Required</sup> <a name="UpdateQualificationType" id="@cdk_utils/iam.mechanicalturk.MechanicalturkOperations.property.UpdateQualificationType"></a>

```typescript
public readonly UpdateQualificationType: string[];
```

- *Type:* string[]

IAM actions required for the UpdateQualificationType API call.

---


