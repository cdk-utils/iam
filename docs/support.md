# `support` Submodule <a name="`support` Submodule" id="@cdk_utils/iam.support"></a>



## Classes <a name="Classes" id="Classes"></a>

### SupportActions <a name="SupportActions" id="@cdk_utils/iam.support.SupportActions"></a>

IAM action constants for the support service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.support.SupportActions.Initializer"></a>

```typescript
import { support } from '@cdk_utils/iam'

new support.SupportActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.actionGetInteraction">actionGetInteraction</a></code> | <code>string</code> | [Read] support:GetInteraction. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.AddAttachmentsToSet">AddAttachmentsToSet</a></code> | <code>string</code> | [Write] support:AddAttachmentsToSet. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.AddCommunicationToCase">AddCommunicationToCase</a></code> | <code>string</code> | [Write] support:AddCommunicationToCase. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.CreateCase">CreateCase</a></code> | <code>string</code> | [Write] support:CreateCase. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.DescribeAttachment">DescribeAttachment</a></code> | <code>string</code> | [Read] support:DescribeAttachment. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.DescribeCaseAttributes">DescribeCaseAttributes</a></code> | <code>string</code> | [Read] support:DescribeCaseAttributes. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.DescribeCaseOptions">DescribeCaseOptions</a></code> | <code>string</code> | [Read] support:DescribeCaseOptions. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.DescribeCases">DescribeCases</a></code> | <code>string</code> | [Read] support:DescribeCases. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.DescribeCommunication">DescribeCommunication</a></code> | <code>string</code> | [Read] support:DescribeCommunication. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.DescribeCommunications">DescribeCommunications</a></code> | <code>string</code> | [Read] support:DescribeCommunications. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.DescribeCreateCaseOptions">DescribeCreateCaseOptions</a></code> | <code>string</code> | [Read] support:DescribeCreateCaseOptions. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.DescribeIssueTypes">DescribeIssueTypes</a></code> | <code>string</code> | [Read] support:DescribeIssueTypes. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.DescribeServices">DescribeServices</a></code> | <code>string</code> | [Read] support:DescribeServices. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.DescribeSeverityLevels">DescribeSeverityLevels</a></code> | <code>string</code> | [Read] support:DescribeSeverityLevels. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.DescribeSupportedLanguages">DescribeSupportedLanguages</a></code> | <code>string</code> | [Read] support:DescribeSupportedLanguages. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.DescribeSupportLevel">DescribeSupportLevel</a></code> | <code>string</code> | [Read] support:DescribeSupportLevel. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.DescribeTrustedAdvisorCheckRefreshStatuses">DescribeTrustedAdvisorCheckRefreshStatuses</a></code> | <code>string</code> | [Read] support:DescribeTrustedAdvisorCheckRefreshStatuses. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.DescribeTrustedAdvisorCheckResult">DescribeTrustedAdvisorCheckResult</a></code> | <code>string</code> | [Read] support:DescribeTrustedAdvisorCheckResult. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.DescribeTrustedAdvisorChecks">DescribeTrustedAdvisorChecks</a></code> | <code>string</code> | [Read] support:DescribeTrustedAdvisorChecks. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.DescribeTrustedAdvisorCheckSummaries">DescribeTrustedAdvisorCheckSummaries</a></code> | <code>string</code> | [Read] support:DescribeTrustedAdvisorCheckSummaries. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.InitiateCallForCase">InitiateCallForCase</a></code> | <code>string</code> | [Write] support:InitiateCallForCase. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.InitiateChatForCase">InitiateChatForCase</a></code> | <code>string</code> | [Write] support:InitiateChatForCase. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.InitiateLiveContactForCase">InitiateLiveContactForCase</a></code> | <code>string</code> | [Write] support:InitiateLiveContactForCase. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.ListInteractionEntries">ListInteractionEntries</a></code> | <code>string</code> | [Read] support:ListInteractionEntries. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.ListInteractions">ListInteractions</a></code> | <code>string</code> | [Read] support:ListInteractions. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.PutCaseAttributes">PutCaseAttributes</a></code> | <code>string</code> | [Write] support:PutCaseAttributes. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.RateCaseCommunication">RateCaseCommunication</a></code> | <code>string</code> | [Write] support:RateCaseCommunication. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.RefreshTrustedAdvisorCheck">RefreshTrustedAdvisorCheck</a></code> | <code>string</code> | [Write] support:RefreshTrustedAdvisorCheck. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.ResolveCase">ResolveCase</a></code> | <code>string</code> | [Write] support:ResolveCase. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.ResolveInteraction">ResolveInteraction</a></code> | <code>string</code> | [Write] support:ResolveInteraction. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.SearchForCases">SearchForCases</a></code> | <code>string</code> | [Read] support:SearchForCases. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.StartInteraction">StartInteraction</a></code> | <code>string</code> | [Write] support:StartInteraction. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.UpdateCaseSeverity">UpdateCaseSeverity</a></code> | <code>string</code> | [Write] support:UpdateCaseSeverity. |
| <code><a href="#@cdk_utils/iam.support.SupportActions.property.UpdateInteraction">UpdateInteraction</a></code> | <code>string</code> | [Write] support:UpdateInteraction. |

---

##### `actionGetInteraction`<sup>Required</sup> <a name="actionGetInteraction" id="@cdk_utils/iam.support.SupportActions.property.actionGetInteraction"></a>

```typescript
public readonly actionGetInteraction: string;
```

- *Type:* string

[Read] support:GetInteraction.

---

##### `AddAttachmentsToSet`<sup>Required</sup> <a name="AddAttachmentsToSet" id="@cdk_utils/iam.support.SupportActions.property.AddAttachmentsToSet"></a>

```typescript
public readonly AddAttachmentsToSet: string;
```

- *Type:* string

[Write] support:AddAttachmentsToSet.

---

##### `AddCommunicationToCase`<sup>Required</sup> <a name="AddCommunicationToCase" id="@cdk_utils/iam.support.SupportActions.property.AddCommunicationToCase"></a>

```typescript
public readonly AddCommunicationToCase: string;
```

- *Type:* string

[Write] support:AddCommunicationToCase.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.support.SupportActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.support.SupportActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.support.SupportActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.support.SupportActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.support.SupportActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateCase`<sup>Required</sup> <a name="CreateCase" id="@cdk_utils/iam.support.SupportActions.property.CreateCase"></a>

```typescript
public readonly CreateCase: string;
```

- *Type:* string

[Write] support:CreateCase.

---

##### `DescribeAttachment`<sup>Required</sup> <a name="DescribeAttachment" id="@cdk_utils/iam.support.SupportActions.property.DescribeAttachment"></a>

```typescript
public readonly DescribeAttachment: string;
```

- *Type:* string

[Read] support:DescribeAttachment.

---

##### `DescribeCaseAttributes`<sup>Required</sup> <a name="DescribeCaseAttributes" id="@cdk_utils/iam.support.SupportActions.property.DescribeCaseAttributes"></a>

```typescript
public readonly DescribeCaseAttributes: string;
```

- *Type:* string

[Read] support:DescribeCaseAttributes.

---

##### `DescribeCaseOptions`<sup>Required</sup> <a name="DescribeCaseOptions" id="@cdk_utils/iam.support.SupportActions.property.DescribeCaseOptions"></a>

```typescript
public readonly DescribeCaseOptions: string;
```

- *Type:* string

[Read] support:DescribeCaseOptions.

---

##### `DescribeCases`<sup>Required</sup> <a name="DescribeCases" id="@cdk_utils/iam.support.SupportActions.property.DescribeCases"></a>

```typescript
public readonly DescribeCases: string;
```

- *Type:* string

[Read] support:DescribeCases.

---

##### `DescribeCommunication`<sup>Required</sup> <a name="DescribeCommunication" id="@cdk_utils/iam.support.SupportActions.property.DescribeCommunication"></a>

```typescript
public readonly DescribeCommunication: string;
```

- *Type:* string

[Read] support:DescribeCommunication.

---

##### `DescribeCommunications`<sup>Required</sup> <a name="DescribeCommunications" id="@cdk_utils/iam.support.SupportActions.property.DescribeCommunications"></a>

```typescript
public readonly DescribeCommunications: string;
```

- *Type:* string

[Read] support:DescribeCommunications.

---

##### `DescribeCreateCaseOptions`<sup>Required</sup> <a name="DescribeCreateCaseOptions" id="@cdk_utils/iam.support.SupportActions.property.DescribeCreateCaseOptions"></a>

```typescript
public readonly DescribeCreateCaseOptions: string;
```

- *Type:* string

[Read] support:DescribeCreateCaseOptions.

---

##### `DescribeIssueTypes`<sup>Required</sup> <a name="DescribeIssueTypes" id="@cdk_utils/iam.support.SupportActions.property.DescribeIssueTypes"></a>

```typescript
public readonly DescribeIssueTypes: string;
```

- *Type:* string

[Read] support:DescribeIssueTypes.

---

##### `DescribeServices`<sup>Required</sup> <a name="DescribeServices" id="@cdk_utils/iam.support.SupportActions.property.DescribeServices"></a>

```typescript
public readonly DescribeServices: string;
```

- *Type:* string

[Read] support:DescribeServices.

---

##### `DescribeSeverityLevels`<sup>Required</sup> <a name="DescribeSeverityLevels" id="@cdk_utils/iam.support.SupportActions.property.DescribeSeverityLevels"></a>

```typescript
public readonly DescribeSeverityLevels: string;
```

- *Type:* string

[Read] support:DescribeSeverityLevels.

---

##### `DescribeSupportedLanguages`<sup>Required</sup> <a name="DescribeSupportedLanguages" id="@cdk_utils/iam.support.SupportActions.property.DescribeSupportedLanguages"></a>

```typescript
public readonly DescribeSupportedLanguages: string;
```

- *Type:* string

[Read] support:DescribeSupportedLanguages.

---

##### `DescribeSupportLevel`<sup>Required</sup> <a name="DescribeSupportLevel" id="@cdk_utils/iam.support.SupportActions.property.DescribeSupportLevel"></a>

```typescript
public readonly DescribeSupportLevel: string;
```

- *Type:* string

[Read] support:DescribeSupportLevel.

---

##### `DescribeTrustedAdvisorCheckRefreshStatuses`<sup>Required</sup> <a name="DescribeTrustedAdvisorCheckRefreshStatuses" id="@cdk_utils/iam.support.SupportActions.property.DescribeTrustedAdvisorCheckRefreshStatuses"></a>

```typescript
public readonly DescribeTrustedAdvisorCheckRefreshStatuses: string;
```

- *Type:* string

[Read] support:DescribeTrustedAdvisorCheckRefreshStatuses.

---

##### `DescribeTrustedAdvisorCheckResult`<sup>Required</sup> <a name="DescribeTrustedAdvisorCheckResult" id="@cdk_utils/iam.support.SupportActions.property.DescribeTrustedAdvisorCheckResult"></a>

```typescript
public readonly DescribeTrustedAdvisorCheckResult: string;
```

- *Type:* string

[Read] support:DescribeTrustedAdvisorCheckResult.

---

##### `DescribeTrustedAdvisorChecks`<sup>Required</sup> <a name="DescribeTrustedAdvisorChecks" id="@cdk_utils/iam.support.SupportActions.property.DescribeTrustedAdvisorChecks"></a>

```typescript
public readonly DescribeTrustedAdvisorChecks: string;
```

- *Type:* string

[Read] support:DescribeTrustedAdvisorChecks.

---

##### `DescribeTrustedAdvisorCheckSummaries`<sup>Required</sup> <a name="DescribeTrustedAdvisorCheckSummaries" id="@cdk_utils/iam.support.SupportActions.property.DescribeTrustedAdvisorCheckSummaries"></a>

```typescript
public readonly DescribeTrustedAdvisorCheckSummaries: string;
```

- *Type:* string

[Read] support:DescribeTrustedAdvisorCheckSummaries.

---

##### `InitiateCallForCase`<sup>Required</sup> <a name="InitiateCallForCase" id="@cdk_utils/iam.support.SupportActions.property.InitiateCallForCase"></a>

```typescript
public readonly InitiateCallForCase: string;
```

- *Type:* string

[Write] support:InitiateCallForCase.

---

##### `InitiateChatForCase`<sup>Required</sup> <a name="InitiateChatForCase" id="@cdk_utils/iam.support.SupportActions.property.InitiateChatForCase"></a>

```typescript
public readonly InitiateChatForCase: string;
```

- *Type:* string

[Write] support:InitiateChatForCase.

---

##### `InitiateLiveContactForCase`<sup>Required</sup> <a name="InitiateLiveContactForCase" id="@cdk_utils/iam.support.SupportActions.property.InitiateLiveContactForCase"></a>

```typescript
public readonly InitiateLiveContactForCase: string;
```

- *Type:* string

[Write] support:InitiateLiveContactForCase.

---

##### `ListInteractionEntries`<sup>Required</sup> <a name="ListInteractionEntries" id="@cdk_utils/iam.support.SupportActions.property.ListInteractionEntries"></a>

```typescript
public readonly ListInteractionEntries: string;
```

- *Type:* string

[Read] support:ListInteractionEntries.

---

##### `ListInteractions`<sup>Required</sup> <a name="ListInteractions" id="@cdk_utils/iam.support.SupportActions.property.ListInteractions"></a>

```typescript
public readonly ListInteractions: string;
```

- *Type:* string

[Read] support:ListInteractions.

---

##### `PutCaseAttributes`<sup>Required</sup> <a name="PutCaseAttributes" id="@cdk_utils/iam.support.SupportActions.property.PutCaseAttributes"></a>

```typescript
public readonly PutCaseAttributes: string;
```

- *Type:* string

[Write] support:PutCaseAttributes.

---

##### `RateCaseCommunication`<sup>Required</sup> <a name="RateCaseCommunication" id="@cdk_utils/iam.support.SupportActions.property.RateCaseCommunication"></a>

```typescript
public readonly RateCaseCommunication: string;
```

- *Type:* string

[Write] support:RateCaseCommunication.

---

##### `RefreshTrustedAdvisorCheck`<sup>Required</sup> <a name="RefreshTrustedAdvisorCheck" id="@cdk_utils/iam.support.SupportActions.property.RefreshTrustedAdvisorCheck"></a>

```typescript
public readonly RefreshTrustedAdvisorCheck: string;
```

- *Type:* string

[Write] support:RefreshTrustedAdvisorCheck.

---

##### `ResolveCase`<sup>Required</sup> <a name="ResolveCase" id="@cdk_utils/iam.support.SupportActions.property.ResolveCase"></a>

```typescript
public readonly ResolveCase: string;
```

- *Type:* string

[Write] support:ResolveCase.

---

##### `ResolveInteraction`<sup>Required</sup> <a name="ResolveInteraction" id="@cdk_utils/iam.support.SupportActions.property.ResolveInteraction"></a>

```typescript
public readonly ResolveInteraction: string;
```

- *Type:* string

[Write] support:ResolveInteraction.

---

##### `SearchForCases`<sup>Required</sup> <a name="SearchForCases" id="@cdk_utils/iam.support.SupportActions.property.SearchForCases"></a>

```typescript
public readonly SearchForCases: string;
```

- *Type:* string

[Read] support:SearchForCases.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.support.SupportActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartInteraction`<sup>Required</sup> <a name="StartInteraction" id="@cdk_utils/iam.support.SupportActions.property.StartInteraction"></a>

```typescript
public readonly StartInteraction: string;
```

- *Type:* string

[Write] support:StartInteraction.

---

##### `UpdateCaseSeverity`<sup>Required</sup> <a name="UpdateCaseSeverity" id="@cdk_utils/iam.support.SupportActions.property.UpdateCaseSeverity"></a>

```typescript
public readonly UpdateCaseSeverity: string;
```

- *Type:* string

[Write] support:UpdateCaseSeverity.

---

##### `UpdateInteraction`<sup>Required</sup> <a name="UpdateInteraction" id="@cdk_utils/iam.support.SupportActions.property.UpdateInteraction"></a>

```typescript
public readonly UpdateInteraction: string;
```

- *Type:* string

[Write] support:UpdateInteraction.

---

### SupportOperations <a name="SupportOperations" id="@cdk_utils/iam.support.SupportOperations"></a>

API operation to required IAM actions mapping for support.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.support.SupportOperations.Initializer"></a>

```typescript
import { support } from '@cdk_utils/iam'

new support.SupportOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.support.SupportOperations.property.AddAttachmentsToSet">AddAttachmentsToSet</a></code> | <code>string[]</code> | IAM actions required for the AddAttachmentsToSet API call. |
| <code><a href="#@cdk_utils/iam.support.SupportOperations.property.AddCommunicationToCase">AddCommunicationToCase</a></code> | <code>string[]</code> | IAM actions required for the AddCommunicationToCase API call. |
| <code><a href="#@cdk_utils/iam.support.SupportOperations.property.CreateCase">CreateCase</a></code> | <code>string[]</code> | IAM actions required for the CreateCase API call. |
| <code><a href="#@cdk_utils/iam.support.SupportOperations.property.DescribeAttachment">DescribeAttachment</a></code> | <code>string[]</code> | IAM actions required for the DescribeAttachment API call. |
| <code><a href="#@cdk_utils/iam.support.SupportOperations.property.DescribeCases">DescribeCases</a></code> | <code>string[]</code> | IAM actions required for the DescribeCases API call. |
| <code><a href="#@cdk_utils/iam.support.SupportOperations.property.DescribeCommunications">DescribeCommunications</a></code> | <code>string[]</code> | IAM actions required for the DescribeCommunications API call. |
| <code><a href="#@cdk_utils/iam.support.SupportOperations.property.DescribeCreateCaseOptions">DescribeCreateCaseOptions</a></code> | <code>string[]</code> | IAM actions required for the DescribeCreateCaseOptions API call. |
| <code><a href="#@cdk_utils/iam.support.SupportOperations.property.DescribeServices">DescribeServices</a></code> | <code>string[]</code> | IAM actions required for the DescribeServices API call. |
| <code><a href="#@cdk_utils/iam.support.SupportOperations.property.DescribeSeverityLevels">DescribeSeverityLevels</a></code> | <code>string[]</code> | IAM actions required for the DescribeSeverityLevels API call. |
| <code><a href="#@cdk_utils/iam.support.SupportOperations.property.DescribeSupportedLanguages">DescribeSupportedLanguages</a></code> | <code>string[]</code> | IAM actions required for the DescribeSupportedLanguages API call. |
| <code><a href="#@cdk_utils/iam.support.SupportOperations.property.DescribeTrustedAdvisorCheckRefreshStatuses">DescribeTrustedAdvisorCheckRefreshStatuses</a></code> | <code>string[]</code> | IAM actions required for the DescribeTrustedAdvisorCheckRefreshStatuses API call. |
| <code><a href="#@cdk_utils/iam.support.SupportOperations.property.DescribeTrustedAdvisorCheckResult">DescribeTrustedAdvisorCheckResult</a></code> | <code>string[]</code> | IAM actions required for the DescribeTrustedAdvisorCheckResult API call. |
| <code><a href="#@cdk_utils/iam.support.SupportOperations.property.DescribeTrustedAdvisorChecks">DescribeTrustedAdvisorChecks</a></code> | <code>string[]</code> | IAM actions required for the DescribeTrustedAdvisorChecks API call. |
| <code><a href="#@cdk_utils/iam.support.SupportOperations.property.DescribeTrustedAdvisorCheckSummaries">DescribeTrustedAdvisorCheckSummaries</a></code> | <code>string[]</code> | IAM actions required for the DescribeTrustedAdvisorCheckSummaries API call. |
| <code><a href="#@cdk_utils/iam.support.SupportOperations.property.RefreshTrustedAdvisorCheck">RefreshTrustedAdvisorCheck</a></code> | <code>string[]</code> | IAM actions required for the RefreshTrustedAdvisorCheck API call. |
| <code><a href="#@cdk_utils/iam.support.SupportOperations.property.ResolveCase">ResolveCase</a></code> | <code>string[]</code> | IAM actions required for the ResolveCase API call. |

---

##### `AddAttachmentsToSet`<sup>Required</sup> <a name="AddAttachmentsToSet" id="@cdk_utils/iam.support.SupportOperations.property.AddAttachmentsToSet"></a>

```typescript
public readonly AddAttachmentsToSet: string[];
```

- *Type:* string[]

IAM actions required for the AddAttachmentsToSet API call.

---

##### `AddCommunicationToCase`<sup>Required</sup> <a name="AddCommunicationToCase" id="@cdk_utils/iam.support.SupportOperations.property.AddCommunicationToCase"></a>

```typescript
public readonly AddCommunicationToCase: string[];
```

- *Type:* string[]

IAM actions required for the AddCommunicationToCase API call.

---

##### `CreateCase`<sup>Required</sup> <a name="CreateCase" id="@cdk_utils/iam.support.SupportOperations.property.CreateCase"></a>

```typescript
public readonly CreateCase: string[];
```

- *Type:* string[]

IAM actions required for the CreateCase API call.

---

##### `DescribeAttachment`<sup>Required</sup> <a name="DescribeAttachment" id="@cdk_utils/iam.support.SupportOperations.property.DescribeAttachment"></a>

```typescript
public readonly DescribeAttachment: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAttachment API call.

---

##### `DescribeCases`<sup>Required</sup> <a name="DescribeCases" id="@cdk_utils/iam.support.SupportOperations.property.DescribeCases"></a>

```typescript
public readonly DescribeCases: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCases API call.

---

##### `DescribeCommunications`<sup>Required</sup> <a name="DescribeCommunications" id="@cdk_utils/iam.support.SupportOperations.property.DescribeCommunications"></a>

```typescript
public readonly DescribeCommunications: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCommunications API call.

---

##### `DescribeCreateCaseOptions`<sup>Required</sup> <a name="DescribeCreateCaseOptions" id="@cdk_utils/iam.support.SupportOperations.property.DescribeCreateCaseOptions"></a>

```typescript
public readonly DescribeCreateCaseOptions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCreateCaseOptions API call.

---

##### `DescribeServices`<sup>Required</sup> <a name="DescribeServices" id="@cdk_utils/iam.support.SupportOperations.property.DescribeServices"></a>

```typescript
public readonly DescribeServices: string[];
```

- *Type:* string[]

IAM actions required for the DescribeServices API call.

---

##### `DescribeSeverityLevels`<sup>Required</sup> <a name="DescribeSeverityLevels" id="@cdk_utils/iam.support.SupportOperations.property.DescribeSeverityLevels"></a>

```typescript
public readonly DescribeSeverityLevels: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSeverityLevels API call.

---

##### `DescribeSupportedLanguages`<sup>Required</sup> <a name="DescribeSupportedLanguages" id="@cdk_utils/iam.support.SupportOperations.property.DescribeSupportedLanguages"></a>

```typescript
public readonly DescribeSupportedLanguages: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSupportedLanguages API call.

---

##### `DescribeTrustedAdvisorCheckRefreshStatuses`<sup>Required</sup> <a name="DescribeTrustedAdvisorCheckRefreshStatuses" id="@cdk_utils/iam.support.SupportOperations.property.DescribeTrustedAdvisorCheckRefreshStatuses"></a>

```typescript
public readonly DescribeTrustedAdvisorCheckRefreshStatuses: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTrustedAdvisorCheckRefreshStatuses API call.

---

##### `DescribeTrustedAdvisorCheckResult`<sup>Required</sup> <a name="DescribeTrustedAdvisorCheckResult" id="@cdk_utils/iam.support.SupportOperations.property.DescribeTrustedAdvisorCheckResult"></a>

```typescript
public readonly DescribeTrustedAdvisorCheckResult: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTrustedAdvisorCheckResult API call.

---

##### `DescribeTrustedAdvisorChecks`<sup>Required</sup> <a name="DescribeTrustedAdvisorChecks" id="@cdk_utils/iam.support.SupportOperations.property.DescribeTrustedAdvisorChecks"></a>

```typescript
public readonly DescribeTrustedAdvisorChecks: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTrustedAdvisorChecks API call.

---

##### `DescribeTrustedAdvisorCheckSummaries`<sup>Required</sup> <a name="DescribeTrustedAdvisorCheckSummaries" id="@cdk_utils/iam.support.SupportOperations.property.DescribeTrustedAdvisorCheckSummaries"></a>

```typescript
public readonly DescribeTrustedAdvisorCheckSummaries: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTrustedAdvisorCheckSummaries API call.

---

##### `RefreshTrustedAdvisorCheck`<sup>Required</sup> <a name="RefreshTrustedAdvisorCheck" id="@cdk_utils/iam.support.SupportOperations.property.RefreshTrustedAdvisorCheck"></a>

```typescript
public readonly RefreshTrustedAdvisorCheck: string[];
```

- *Type:* string[]

IAM actions required for the RefreshTrustedAdvisorCheck API call.

---

##### `ResolveCase`<sup>Required</sup> <a name="ResolveCase" id="@cdk_utils/iam.support.SupportOperations.property.ResolveCase"></a>

```typescript
public readonly ResolveCase: string[];
```

- *Type:* string[]

IAM actions required for the ResolveCase API call.

---


