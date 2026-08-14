# `trustedadvisor` Submodule <a name="`trustedadvisor` Submodule" id="@cdk_utils/iam.trustedadvisor"></a>


## Structs <a name="Structs" id="Structs"></a>

### TrustedadvisorChecksArnComponents <a name="TrustedadvisorChecksArnComponents" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorChecksArnComponents"></a>

Parsed components of a checks ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorChecksArnComponents.Initializer"></a>

```typescript
import { trustedadvisor } from '@cdk_utils/iam'

const trustedadvisorChecksArnComponents: trustedadvisor.TrustedadvisorChecksArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorChecksArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorChecksArnComponents.property.categoryCode">categoryCode</a></code> | <code>string</code> | The CategoryCode component. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorChecksArnComponents.property.checkId">checkId</a></code> | <code>string</code> | The CheckId component. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorChecksArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorChecksArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorChecksArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `categoryCode`<sup>Required</sup> <a name="categoryCode" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorChecksArnComponents.property.categoryCode"></a>

```typescript
public readonly categoryCode: string;
```

- *Type:* string

The CategoryCode component.

---

##### `checkId`<sup>Required</sup> <a name="checkId" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorChecksArnComponents.property.checkId"></a>

```typescript
public readonly checkId: string;
```

- *Type:* string

The CheckId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorChecksArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorChecksArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TrustedadvisorChecksArnProps <a name="TrustedadvisorChecksArnProps" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorChecksArnProps"></a>

Properties for building a checks ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorChecksArnProps.Initializer"></a>

```typescript
import { trustedadvisor } from '@cdk_utils/iam'

const trustedadvisorChecksArnProps: trustedadvisor.TrustedadvisorChecksArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorChecksArnProps.property.categoryCode">categoryCode</a></code> | <code>string</code> | The CategoryCode component of the ARN. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorChecksArnProps.property.checkId">checkId</a></code> | <code>string</code> | The CheckId component of the ARN. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorChecksArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorChecksArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorChecksArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `categoryCode`<sup>Required</sup> <a name="categoryCode" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorChecksArnProps.property.categoryCode"></a>

```typescript
public readonly categoryCode: string;
```

- *Type:* string

The CategoryCode component of the ARN.

---

##### `checkId`<sup>Required</sup> <a name="checkId" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorChecksArnProps.property.checkId"></a>

```typescript
public readonly checkId: string;
```

- *Type:* string

The CheckId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorChecksArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorChecksArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorChecksArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### TrustedadvisorActions <a name="TrustedadvisorActions" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions"></a>

IAM action constants for the trustedadvisor service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.Initializer"></a>

```typescript
import { trustedadvisor } from '@cdk_utils/iam'

new trustedadvisor.TrustedadvisorActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.actionGetOrganizationRecommendation">actionGetOrganizationRecommendation</a></code> | <code>string</code> | [Read] trustedadvisor:GetOrganizationRecommendation. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.actionGetRecommendation">actionGetRecommendation</a></code> | <code>string</code> | [Read] trustedadvisor:GetRecommendation. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.actionSetAccountAccess">actionSetAccountAccess</a></code> | <code>string</code> | [Write] trustedadvisor:SetAccountAccess. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.actionSetOrganizationAccess">actionSetOrganizationAccess</a></code> | <code>string</code> | [Write] trustedadvisor:SetOrganizationAccess. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.BatchUpdateRecommendationResourceExclusion">BatchUpdateRecommendationResourceExclusion</a></code> | <code>string</code> | [Write] trustedadvisor:BatchUpdateRecommendationResourceExclusion. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DeleteNotificationConfigurationForDelegatedAdmin">DeleteNotificationConfigurationForDelegatedAdmin</a></code> | <code>string</code> | [Write] trustedadvisor:DeleteNotificationConfigurationForDelegatedAdmin. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeAccount">DescribeAccount</a></code> | <code>string</code> | [Read] trustedadvisor:DescribeAccount. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeAccountAccess">DescribeAccountAccess</a></code> | <code>string</code> | [Read] trustedadvisor:DescribeAccountAccess. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeCheckItems">DescribeCheckItems</a></code> | <code>string</code> | [Read] trustedadvisor:DescribeCheckItems. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeCheckRefreshStatuses">DescribeCheckRefreshStatuses</a></code> | <code>string</code> | [Read] trustedadvisor:DescribeCheckRefreshStatuses. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeChecks">DescribeChecks</a></code> | <code>string</code> | [Read] trustedadvisor:DescribeChecks. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeCheckStatusHistoryChanges">DescribeCheckStatusHistoryChanges</a></code> | <code>string</code> | [Read] trustedadvisor:DescribeCheckStatusHistoryChanges. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeCheckSummaries">DescribeCheckSummaries</a></code> | <code>string</code> | [Read] trustedadvisor:DescribeCheckSummaries. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeNotificationConfigurations">DescribeNotificationConfigurations</a></code> | <code>string</code> | [Read] trustedadvisor:DescribeNotificationConfigurations. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeNotificationPreferences">DescribeNotificationPreferences</a></code> | <code>string</code> | [Read] trustedadvisor:DescribeNotificationPreferences. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeOrganization">DescribeOrganization</a></code> | <code>string</code> | [Read] trustedadvisor:DescribeOrganization. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeOrganizationAccounts">DescribeOrganizationAccounts</a></code> | <code>string</code> | [Read] trustedadvisor:DescribeOrganizationAccounts. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeReports">DescribeReports</a></code> | <code>string</code> | [Read] trustedadvisor:DescribeReports. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeRisk">DescribeRisk</a></code> | <code>string</code> | [Read] trustedadvisor:DescribeRisk. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeRiskResources">DescribeRiskResources</a></code> | <code>string</code> | [Read] trustedadvisor:DescribeRiskResources. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeRisks">DescribeRisks</a></code> | <code>string</code> | [Read] trustedadvisor:DescribeRisks. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeServiceMetadata">DescribeServiceMetadata</a></code> | <code>string</code> | [Read] trustedadvisor:DescribeServiceMetadata. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DownloadRisk">DownloadRisk</a></code> | <code>string</code> | [Read] trustedadvisor:DownloadRisk. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.ExcludeCheckItems">ExcludeCheckItems</a></code> | <code>string</code> | [Write] trustedadvisor:ExcludeCheckItems. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.GenerateReport">GenerateReport</a></code> | <code>string</code> | [Write] trustedadvisor:GenerateReport. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.IncludeCheckItems">IncludeCheckItems</a></code> | <code>string</code> | [Write] trustedadvisor:IncludeCheckItems. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.ListAccountsForParent">ListAccountsForParent</a></code> | <code>string</code> | [Read] trustedadvisor:ListAccountsForParent. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.ListChecks">ListChecks</a></code> | <code>string</code> | [List] trustedadvisor:ListChecks. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.ListOrganizationalUnitsForParent">ListOrganizationalUnitsForParent</a></code> | <code>string</code> | [Read] trustedadvisor:ListOrganizationalUnitsForParent. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.ListOrganizationRecommendationAccounts">ListOrganizationRecommendationAccounts</a></code> | <code>string</code> | [List] trustedadvisor:ListOrganizationRecommendationAccounts. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.ListOrganizationRecommendationResources">ListOrganizationRecommendationResources</a></code> | <code>string</code> | [List] trustedadvisor:ListOrganizationRecommendationResources. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.ListOrganizationRecommendations">ListOrganizationRecommendations</a></code> | <code>string</code> | [List] trustedadvisor:ListOrganizationRecommendations. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.ListRecommendationResources">ListRecommendationResources</a></code> | <code>string</code> | [List] trustedadvisor:ListRecommendationResources. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.ListRecommendations">ListRecommendations</a></code> | <code>string</code> | [List] trustedadvisor:ListRecommendations. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.ListRecommendationsForResource">ListRecommendationsForResource</a></code> | <code>string</code> | [List] trustedadvisor:ListRecommendationsForResource. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.ListRoots">ListRoots</a></code> | <code>string</code> | [Read] trustedadvisor:ListRoots. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.RefreshCheck">RefreshCheck</a></code> | <code>string</code> | [Write] trustedadvisor:RefreshCheck. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.UpdateNotificationConfigurations">UpdateNotificationConfigurations</a></code> | <code>string</code> | [Write] trustedadvisor:UpdateNotificationConfigurations. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.UpdateNotificationPreferences">UpdateNotificationPreferences</a></code> | <code>string</code> | [Write] trustedadvisor:UpdateNotificationPreferences. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.UpdateOrganizationRecommendationLifecycle">UpdateOrganizationRecommendationLifecycle</a></code> | <code>string</code> | [Write] trustedadvisor:UpdateOrganizationRecommendationLifecycle. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.UpdateRecommendationLifecycle">UpdateRecommendationLifecycle</a></code> | <code>string</code> | [Write] trustedadvisor:UpdateRecommendationLifecycle. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.UpdateRiskStatus">UpdateRiskStatus</a></code> | <code>string</code> | [Write] trustedadvisor:UpdateRiskStatus. |

---

##### `actionGetOrganizationRecommendation`<sup>Required</sup> <a name="actionGetOrganizationRecommendation" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.actionGetOrganizationRecommendation"></a>

```typescript
public readonly actionGetOrganizationRecommendation: string;
```

- *Type:* string

[Read] trustedadvisor:GetOrganizationRecommendation.

---

##### `actionGetRecommendation`<sup>Required</sup> <a name="actionGetRecommendation" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.actionGetRecommendation"></a>

```typescript
public readonly actionGetRecommendation: string;
```

- *Type:* string

[Read] trustedadvisor:GetRecommendation.

---

##### `actionSetAccountAccess`<sup>Required</sup> <a name="actionSetAccountAccess" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.actionSetAccountAccess"></a>

```typescript
public readonly actionSetAccountAccess: string;
```

- *Type:* string

[Write] trustedadvisor:SetAccountAccess.

---

##### `actionSetOrganizationAccess`<sup>Required</sup> <a name="actionSetOrganizationAccess" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.actionSetOrganizationAccess"></a>

```typescript
public readonly actionSetOrganizationAccess: string;
```

- *Type:* string

[Write] trustedadvisor:SetOrganizationAccess.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchUpdateRecommendationResourceExclusion`<sup>Required</sup> <a name="BatchUpdateRecommendationResourceExclusion" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.BatchUpdateRecommendationResourceExclusion"></a>

```typescript
public readonly BatchUpdateRecommendationResourceExclusion: string;
```

- *Type:* string

[Write] trustedadvisor:BatchUpdateRecommendationResourceExclusion.

---

##### `DeleteNotificationConfigurationForDelegatedAdmin`<sup>Required</sup> <a name="DeleteNotificationConfigurationForDelegatedAdmin" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DeleteNotificationConfigurationForDelegatedAdmin"></a>

```typescript
public readonly DeleteNotificationConfigurationForDelegatedAdmin: string;
```

- *Type:* string

[Write] trustedadvisor:DeleteNotificationConfigurationForDelegatedAdmin.

---

##### `DescribeAccount`<sup>Required</sup> <a name="DescribeAccount" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeAccount"></a>

```typescript
public readonly DescribeAccount: string;
```

- *Type:* string

[Read] trustedadvisor:DescribeAccount.

---

##### `DescribeAccountAccess`<sup>Required</sup> <a name="DescribeAccountAccess" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeAccountAccess"></a>

```typescript
public readonly DescribeAccountAccess: string;
```

- *Type:* string

[Read] trustedadvisor:DescribeAccountAccess.

---

##### `DescribeCheckItems`<sup>Required</sup> <a name="DescribeCheckItems" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeCheckItems"></a>

```typescript
public readonly DescribeCheckItems: string;
```

- *Type:* string

[Read] trustedadvisor:DescribeCheckItems.

---

##### `DescribeCheckRefreshStatuses`<sup>Required</sup> <a name="DescribeCheckRefreshStatuses" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeCheckRefreshStatuses"></a>

```typescript
public readonly DescribeCheckRefreshStatuses: string;
```

- *Type:* string

[Read] trustedadvisor:DescribeCheckRefreshStatuses.

---

##### `DescribeChecks`<sup>Required</sup> <a name="DescribeChecks" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeChecks"></a>

```typescript
public readonly DescribeChecks: string;
```

- *Type:* string

[Read] trustedadvisor:DescribeChecks.

---

##### `DescribeCheckStatusHistoryChanges`<sup>Required</sup> <a name="DescribeCheckStatusHistoryChanges" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeCheckStatusHistoryChanges"></a>

```typescript
public readonly DescribeCheckStatusHistoryChanges: string;
```

- *Type:* string

[Read] trustedadvisor:DescribeCheckStatusHistoryChanges.

---

##### `DescribeCheckSummaries`<sup>Required</sup> <a name="DescribeCheckSummaries" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeCheckSummaries"></a>

```typescript
public readonly DescribeCheckSummaries: string;
```

- *Type:* string

[Read] trustedadvisor:DescribeCheckSummaries.

---

##### `DescribeNotificationConfigurations`<sup>Required</sup> <a name="DescribeNotificationConfigurations" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeNotificationConfigurations"></a>

```typescript
public readonly DescribeNotificationConfigurations: string;
```

- *Type:* string

[Read] trustedadvisor:DescribeNotificationConfigurations.

---

##### `DescribeNotificationPreferences`<sup>Required</sup> <a name="DescribeNotificationPreferences" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeNotificationPreferences"></a>

```typescript
public readonly DescribeNotificationPreferences: string;
```

- *Type:* string

[Read] trustedadvisor:DescribeNotificationPreferences.

---

##### `DescribeOrganization`<sup>Required</sup> <a name="DescribeOrganization" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeOrganization"></a>

```typescript
public readonly DescribeOrganization: string;
```

- *Type:* string

[Read] trustedadvisor:DescribeOrganization.

---

##### `DescribeOrganizationAccounts`<sup>Required</sup> <a name="DescribeOrganizationAccounts" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeOrganizationAccounts"></a>

```typescript
public readonly DescribeOrganizationAccounts: string;
```

- *Type:* string

[Read] trustedadvisor:DescribeOrganizationAccounts.

---

##### `DescribeReports`<sup>Required</sup> <a name="DescribeReports" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeReports"></a>

```typescript
public readonly DescribeReports: string;
```

- *Type:* string

[Read] trustedadvisor:DescribeReports.

---

##### `DescribeRisk`<sup>Required</sup> <a name="DescribeRisk" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeRisk"></a>

```typescript
public readonly DescribeRisk: string;
```

- *Type:* string

[Read] trustedadvisor:DescribeRisk.

---

##### `DescribeRiskResources`<sup>Required</sup> <a name="DescribeRiskResources" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeRiskResources"></a>

```typescript
public readonly DescribeRiskResources: string;
```

- *Type:* string

[Read] trustedadvisor:DescribeRiskResources.

---

##### `DescribeRisks`<sup>Required</sup> <a name="DescribeRisks" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeRisks"></a>

```typescript
public readonly DescribeRisks: string;
```

- *Type:* string

[Read] trustedadvisor:DescribeRisks.

---

##### `DescribeServiceMetadata`<sup>Required</sup> <a name="DescribeServiceMetadata" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DescribeServiceMetadata"></a>

```typescript
public readonly DescribeServiceMetadata: string;
```

- *Type:* string

[Read] trustedadvisor:DescribeServiceMetadata.

---

##### `DownloadRisk`<sup>Required</sup> <a name="DownloadRisk" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.DownloadRisk"></a>

```typescript
public readonly DownloadRisk: string;
```

- *Type:* string

[Read] trustedadvisor:DownloadRisk.

---

##### `ExcludeCheckItems`<sup>Required</sup> <a name="ExcludeCheckItems" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.ExcludeCheckItems"></a>

```typescript
public readonly ExcludeCheckItems: string;
```

- *Type:* string

[Write] trustedadvisor:ExcludeCheckItems.

---

##### `GenerateReport`<sup>Required</sup> <a name="GenerateReport" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.GenerateReport"></a>

```typescript
public readonly GenerateReport: string;
```

- *Type:* string

[Write] trustedadvisor:GenerateReport.

---

##### `IncludeCheckItems`<sup>Required</sup> <a name="IncludeCheckItems" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.IncludeCheckItems"></a>

```typescript
public readonly IncludeCheckItems: string;
```

- *Type:* string

[Write] trustedadvisor:IncludeCheckItems.

---

##### `ListAccountsForParent`<sup>Required</sup> <a name="ListAccountsForParent" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.ListAccountsForParent"></a>

```typescript
public readonly ListAccountsForParent: string;
```

- *Type:* string

[Read] trustedadvisor:ListAccountsForParent.

---

##### `ListChecks`<sup>Required</sup> <a name="ListChecks" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.ListChecks"></a>

```typescript
public readonly ListChecks: string;
```

- *Type:* string

[List] trustedadvisor:ListChecks.

---

##### `ListOrganizationalUnitsForParent`<sup>Required</sup> <a name="ListOrganizationalUnitsForParent" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.ListOrganizationalUnitsForParent"></a>

```typescript
public readonly ListOrganizationalUnitsForParent: string;
```

- *Type:* string

[Read] trustedadvisor:ListOrganizationalUnitsForParent.

---

##### `ListOrganizationRecommendationAccounts`<sup>Required</sup> <a name="ListOrganizationRecommendationAccounts" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.ListOrganizationRecommendationAccounts"></a>

```typescript
public readonly ListOrganizationRecommendationAccounts: string;
```

- *Type:* string

[List] trustedadvisor:ListOrganizationRecommendationAccounts.

---

##### `ListOrganizationRecommendationResources`<sup>Required</sup> <a name="ListOrganizationRecommendationResources" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.ListOrganizationRecommendationResources"></a>

```typescript
public readonly ListOrganizationRecommendationResources: string;
```

- *Type:* string

[List] trustedadvisor:ListOrganizationRecommendationResources.

---

##### `ListOrganizationRecommendations`<sup>Required</sup> <a name="ListOrganizationRecommendations" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.ListOrganizationRecommendations"></a>

```typescript
public readonly ListOrganizationRecommendations: string;
```

- *Type:* string

[List] trustedadvisor:ListOrganizationRecommendations.

---

##### `ListRecommendationResources`<sup>Required</sup> <a name="ListRecommendationResources" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.ListRecommendationResources"></a>

```typescript
public readonly ListRecommendationResources: string;
```

- *Type:* string

[List] trustedadvisor:ListRecommendationResources.

---

##### `ListRecommendations`<sup>Required</sup> <a name="ListRecommendations" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.ListRecommendations"></a>

```typescript
public readonly ListRecommendations: string;
```

- *Type:* string

[List] trustedadvisor:ListRecommendations.

---

##### `ListRecommendationsForResource`<sup>Required</sup> <a name="ListRecommendationsForResource" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.ListRecommendationsForResource"></a>

```typescript
public readonly ListRecommendationsForResource: string;
```

- *Type:* string

[List] trustedadvisor:ListRecommendationsForResource.

---

##### `ListRoots`<sup>Required</sup> <a name="ListRoots" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.ListRoots"></a>

```typescript
public readonly ListRoots: string;
```

- *Type:* string

[Read] trustedadvisor:ListRoots.

---

##### `RefreshCheck`<sup>Required</sup> <a name="RefreshCheck" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.RefreshCheck"></a>

```typescript
public readonly RefreshCheck: string;
```

- *Type:* string

[Write] trustedadvisor:RefreshCheck.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UpdateNotificationConfigurations`<sup>Required</sup> <a name="UpdateNotificationConfigurations" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.UpdateNotificationConfigurations"></a>

```typescript
public readonly UpdateNotificationConfigurations: string;
```

- *Type:* string

[Write] trustedadvisor:UpdateNotificationConfigurations.

---

##### `UpdateNotificationPreferences`<sup>Required</sup> <a name="UpdateNotificationPreferences" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.UpdateNotificationPreferences"></a>

```typescript
public readonly UpdateNotificationPreferences: string;
```

- *Type:* string

[Write] trustedadvisor:UpdateNotificationPreferences.

---

##### `UpdateOrganizationRecommendationLifecycle`<sup>Required</sup> <a name="UpdateOrganizationRecommendationLifecycle" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.UpdateOrganizationRecommendationLifecycle"></a>

```typescript
public readonly UpdateOrganizationRecommendationLifecycle: string;
```

- *Type:* string

[Write] trustedadvisor:UpdateOrganizationRecommendationLifecycle.

---

##### `UpdateRecommendationLifecycle`<sup>Required</sup> <a name="UpdateRecommendationLifecycle" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.UpdateRecommendationLifecycle"></a>

```typescript
public readonly UpdateRecommendationLifecycle: string;
```

- *Type:* string

[Write] trustedadvisor:UpdateRecommendationLifecycle.

---

##### `UpdateRiskStatus`<sup>Required</sup> <a name="UpdateRiskStatus" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorActions.property.UpdateRiskStatus"></a>

```typescript
public readonly UpdateRiskStatus: string;
```

- *Type:* string

[Write] trustedadvisor:UpdateRiskStatus.

---

### TrustedadvisorOperations <a name="TrustedadvisorOperations" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorOperations"></a>

API operation to required IAM actions mapping for trustedadvisor.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorOperations.Initializer"></a>

```typescript
import { trustedadvisor } from '@cdk_utils/iam'

new trustedadvisor.TrustedadvisorOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorOperations.property.BatchUpdateRecommendationResourceExclusion">BatchUpdateRecommendationResourceExclusion</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateRecommendationResourceExclusion API call. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorOperations.property.ListChecks">ListChecks</a></code> | <code>string[]</code> | IAM actions required for the ListChecks API call. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorOperations.property.ListOrganizationRecommendationAccounts">ListOrganizationRecommendationAccounts</a></code> | <code>string[]</code> | IAM actions required for the ListOrganizationRecommendationAccounts API call. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorOperations.property.ListOrganizationRecommendationResources">ListOrganizationRecommendationResources</a></code> | <code>string[]</code> | IAM actions required for the ListOrganizationRecommendationResources API call. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorOperations.property.ListOrganizationRecommendations">ListOrganizationRecommendations</a></code> | <code>string[]</code> | IAM actions required for the ListOrganizationRecommendations API call. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorOperations.property.ListRecommendationResources">ListRecommendationResources</a></code> | <code>string[]</code> | IAM actions required for the ListRecommendationResources API call. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorOperations.property.ListRecommendations">ListRecommendations</a></code> | <code>string[]</code> | IAM actions required for the ListRecommendations API call. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorOperations.property.ListRecommendationsForResource">ListRecommendationsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListRecommendationsForResource API call. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorOperations.property.opGetOrganizationRecommendation">opGetOrganizationRecommendation</a></code> | <code>string[]</code> | IAM actions required for the GetOrganizationRecommendation API call. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorOperations.property.opGetRecommendation">opGetRecommendation</a></code> | <code>string[]</code> | IAM actions required for the GetRecommendation API call. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorOperations.property.UpdateOrganizationRecommendationLifecycle">UpdateOrganizationRecommendationLifecycle</a></code> | <code>string[]</code> | IAM actions required for the UpdateOrganizationRecommendationLifecycle API call. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorOperations.property.UpdateRecommendationLifecycle">UpdateRecommendationLifecycle</a></code> | <code>string[]</code> | IAM actions required for the UpdateRecommendationLifecycle API call. |

---

##### `BatchUpdateRecommendationResourceExclusion`<sup>Required</sup> <a name="BatchUpdateRecommendationResourceExclusion" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorOperations.property.BatchUpdateRecommendationResourceExclusion"></a>

```typescript
public readonly BatchUpdateRecommendationResourceExclusion: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateRecommendationResourceExclusion API call.

---

##### `ListChecks`<sup>Required</sup> <a name="ListChecks" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorOperations.property.ListChecks"></a>

```typescript
public readonly ListChecks: string[];
```

- *Type:* string[]

IAM actions required for the ListChecks API call.

---

##### `ListOrganizationRecommendationAccounts`<sup>Required</sup> <a name="ListOrganizationRecommendationAccounts" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorOperations.property.ListOrganizationRecommendationAccounts"></a>

```typescript
public readonly ListOrganizationRecommendationAccounts: string[];
```

- *Type:* string[]

IAM actions required for the ListOrganizationRecommendationAccounts API call.

---

##### `ListOrganizationRecommendationResources`<sup>Required</sup> <a name="ListOrganizationRecommendationResources" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorOperations.property.ListOrganizationRecommendationResources"></a>

```typescript
public readonly ListOrganizationRecommendationResources: string[];
```

- *Type:* string[]

IAM actions required for the ListOrganizationRecommendationResources API call.

---

##### `ListOrganizationRecommendations`<sup>Required</sup> <a name="ListOrganizationRecommendations" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorOperations.property.ListOrganizationRecommendations"></a>

```typescript
public readonly ListOrganizationRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the ListOrganizationRecommendations API call.

---

##### `ListRecommendationResources`<sup>Required</sup> <a name="ListRecommendationResources" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorOperations.property.ListRecommendationResources"></a>

```typescript
public readonly ListRecommendationResources: string[];
```

- *Type:* string[]

IAM actions required for the ListRecommendationResources API call.

---

##### `ListRecommendations`<sup>Required</sup> <a name="ListRecommendations" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorOperations.property.ListRecommendations"></a>

```typescript
public readonly ListRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the ListRecommendations API call.

---

##### `ListRecommendationsForResource`<sup>Required</sup> <a name="ListRecommendationsForResource" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorOperations.property.ListRecommendationsForResource"></a>

```typescript
public readonly ListRecommendationsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListRecommendationsForResource API call.

---

##### `opGetOrganizationRecommendation`<sup>Required</sup> <a name="opGetOrganizationRecommendation" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorOperations.property.opGetOrganizationRecommendation"></a>

```typescript
public readonly opGetOrganizationRecommendation: string[];
```

- *Type:* string[]

IAM actions required for the GetOrganizationRecommendation API call.

---

##### `opGetRecommendation`<sup>Required</sup> <a name="opGetRecommendation" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorOperations.property.opGetRecommendation"></a>

```typescript
public readonly opGetRecommendation: string[];
```

- *Type:* string[]

IAM actions required for the GetRecommendation API call.

---

##### `UpdateOrganizationRecommendationLifecycle`<sup>Required</sup> <a name="UpdateOrganizationRecommendationLifecycle" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorOperations.property.UpdateOrganizationRecommendationLifecycle"></a>

```typescript
public readonly UpdateOrganizationRecommendationLifecycle: string[];
```

- *Type:* string[]

IAM actions required for the UpdateOrganizationRecommendationLifecycle API call.

---

##### `UpdateRecommendationLifecycle`<sup>Required</sup> <a name="UpdateRecommendationLifecycle" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorOperations.property.UpdateRecommendationLifecycle"></a>

```typescript
public readonly UpdateRecommendationLifecycle: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRecommendationLifecycle API call.

---

### TrustedadvisorResources <a name="TrustedadvisorResources" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorResources"></a>

ARN builders, validators, and parsers for trustedadvisor resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorResources.Initializer"></a>

```typescript
import { trustedadvisor } from '@cdk_utils/iam'

new trustedadvisor.TrustedadvisorResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorResources.checks">checks</a></code> | Builds an ARN for the checks resource. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorResources.isValidChecksArn">isValidChecksArn</a></code> | Validates whether a string is a valid ARN for the checks resource. |
| <code><a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorResources.parseChecksArn">parseChecksArn</a></code> | Parses a checks ARN into its components. |

---

##### `checks` <a name="checks" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorResources.checks"></a>

```typescript
import { trustedadvisor } from '@cdk_utils/iam'

trustedadvisor.TrustedadvisorResources.checks(props: TrustedadvisorChecksArnProps)
```

Builds an ARN for the checks resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorResources.checks.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.trustedadvisor.TrustedadvisorChecksArnProps">TrustedadvisorChecksArnProps</a>

---

##### `isValidChecksArn` <a name="isValidChecksArn" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorResources.isValidChecksArn"></a>

```typescript
import { trustedadvisor } from '@cdk_utils/iam'

trustedadvisor.TrustedadvisorResources.isValidChecksArn(arn: string)
```

Validates whether a string is a valid ARN for the checks resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorResources.isValidChecksArn.parameter.arn"></a>

- *Type:* string

---

##### `parseChecksArn` <a name="parseChecksArn" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorResources.parseChecksArn"></a>

```typescript
import { trustedadvisor } from '@cdk_utils/iam'

trustedadvisor.TrustedadvisorResources.parseChecksArn(arn: string)
```

Parses a checks ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.trustedadvisor.TrustedadvisorResources.parseChecksArn.parameter.arn"></a>

- *Type:* string

---




