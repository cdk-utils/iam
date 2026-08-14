# `detective` Submodule <a name="`detective` Submodule" id="@cdk_utils/iam.detective"></a>


## Structs <a name="Structs" id="Structs"></a>

### DetectiveGraphArnComponents <a name="DetectiveGraphArnComponents" id="@cdk_utils/iam.detective.DetectiveGraphArnComponents"></a>

Parsed components of a Graph ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.detective.DetectiveGraphArnComponents.Initializer"></a>

```typescript
import { detective } from '@cdk_utils/iam'

const detectiveGraphArnComponents: detective.DetectiveGraphArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.detective.DetectiveGraphArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveGraphArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveGraphArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveGraphArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.detective.DetectiveGraphArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.detective.DetectiveGraphArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.detective.DetectiveGraphArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.detective.DetectiveGraphArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### DetectiveGraphArnProps <a name="DetectiveGraphArnProps" id="@cdk_utils/iam.detective.DetectiveGraphArnProps"></a>

Properties for building a Graph ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.detective.DetectiveGraphArnProps.Initializer"></a>

```typescript
import { detective } from '@cdk_utils/iam'

const detectiveGraphArnProps: detective.DetectiveGraphArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.detective.DetectiveGraphArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveGraphArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveGraphArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveGraphArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.detective.DetectiveGraphArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.detective.DetectiveGraphArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.detective.DetectiveGraphArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.detective.DetectiveGraphArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### DetectiveActions <a name="DetectiveActions" id="@cdk_utils/iam.detective.DetectiveActions"></a>

IAM action constants for the detective service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.detective.DetectiveActions.Initializer"></a>

```typescript
import { detective } from '@cdk_utils/iam'

new detective.DetectiveActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.AcceptInvitation">AcceptInvitation</a></code> | <code>string</code> | [Write] detective:AcceptInvitation. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.actionGetFreeTrialEligibility">actionGetFreeTrialEligibility</a></code> | <code>string</code> | [Read] detective:GetFreeTrialEligibility. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.actionGetGraphIngestState">actionGetGraphIngestState</a></code> | <code>string</code> | [Read] detective:GetGraphIngestState. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.actionGetInvestigation">actionGetInvestigation</a></code> | <code>string</code> | [Read] detective:GetInvestigation. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.actionGetMembers">actionGetMembers</a></code> | <code>string</code> | [Read] detective:GetMembers. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.actionGetPricingInformation">actionGetPricingInformation</a></code> | <code>string</code> | [Read] detective:GetPricingInformation. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.actionGetUsageInformation">actionGetUsageInformation</a></code> | <code>string</code> | [Read] detective:GetUsageInformation. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.BatchGetGraphMemberDatasources">BatchGetGraphMemberDatasources</a></code> | <code>string</code> | [Read] detective:BatchGetGraphMemberDatasources. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.BatchGetMembershipDatasources">BatchGetMembershipDatasources</a></code> | <code>string</code> | [Read] detective:BatchGetMembershipDatasources. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.CreateGraph">CreateGraph</a></code> | <code>string</code> | [Write] detective:CreateGraph. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.CreateMembers">CreateMembers</a></code> | <code>string</code> | [Write] detective:CreateMembers. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.DeleteGraph">DeleteGraph</a></code> | <code>string</code> | [Write] detective:DeleteGraph. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.DeleteMembers">DeleteMembers</a></code> | <code>string</code> | [Write] detective:DeleteMembers. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.DescribeOrganizationConfiguration">DescribeOrganizationConfiguration</a></code> | <code>string</code> | [Read] detective:DescribeOrganizationConfiguration. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.DisableOrganizationAdminAccount">DisableOrganizationAdminAccount</a></code> | <code>string</code> | [Write] detective:DisableOrganizationAdminAccount. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.DisassociateMembership">DisassociateMembership</a></code> | <code>string</code> | [Write] detective:DisassociateMembership. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.EnableOrganizationAdminAccount">EnableOrganizationAdminAccount</a></code> | <code>string</code> | [Write] detective:EnableOrganizationAdminAccount. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.InvokeAssistant">InvokeAssistant</a></code> | <code>string</code> | [Read] detective:InvokeAssistant. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.ListDatasourcePackages">ListDatasourcePackages</a></code> | <code>string</code> | [List] detective:ListDatasourcePackages. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.ListGraphs">ListGraphs</a></code> | <code>string</code> | [List] detective:ListGraphs. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.ListHighDegreeEntities">ListHighDegreeEntities</a></code> | <code>string</code> | [List] detective:ListHighDegreeEntities. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.ListIndicators">ListIndicators</a></code> | <code>string</code> | [List] detective:ListIndicators. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.ListInvestigations">ListInvestigations</a></code> | <code>string</code> | [List] detective:ListInvestigations. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.ListInvitations">ListInvitations</a></code> | <code>string</code> | [List] detective:ListInvitations. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.ListMembers">ListMembers</a></code> | <code>string</code> | [List] detective:ListMembers. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.ListOrganizationAdminAccount">ListOrganizationAdminAccount</a></code> | <code>string</code> | [List] detective:ListOrganizationAdminAccount. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] detective:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.RejectInvitation">RejectInvitation</a></code> | <code>string</code> | [Write] detective:RejectInvitation. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.SearchGraph">SearchGraph</a></code> | <code>string</code> | [Read] detective:SearchGraph. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.StartInvestigation">StartInvestigation</a></code> | <code>string</code> | [Write] detective:StartInvestigation. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.StartMonitoringMember">StartMonitoringMember</a></code> | <code>string</code> | [Write] detective:StartMonitoringMember. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] detective:TagResource. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] detective:UntagResource. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.UpdateDatasourcePackages">UpdateDatasourcePackages</a></code> | <code>string</code> | [Write] detective:UpdateDatasourcePackages. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.UpdateInvestigationState">UpdateInvestigationState</a></code> | <code>string</code> | [Write] detective:UpdateInvestigationState. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveActions.property.UpdateOrganizationConfiguration">UpdateOrganizationConfiguration</a></code> | <code>string</code> | [Write] detective:UpdateOrganizationConfiguration. |

---

##### `AcceptInvitation`<sup>Required</sup> <a name="AcceptInvitation" id="@cdk_utils/iam.detective.DetectiveActions.property.AcceptInvitation"></a>

```typescript
public readonly AcceptInvitation: string;
```

- *Type:* string

[Write] detective:AcceptInvitation.

---

##### `actionGetFreeTrialEligibility`<sup>Required</sup> <a name="actionGetFreeTrialEligibility" id="@cdk_utils/iam.detective.DetectiveActions.property.actionGetFreeTrialEligibility"></a>

```typescript
public readonly actionGetFreeTrialEligibility: string;
```

- *Type:* string

[Read] detective:GetFreeTrialEligibility.

---

##### `actionGetGraphIngestState`<sup>Required</sup> <a name="actionGetGraphIngestState" id="@cdk_utils/iam.detective.DetectiveActions.property.actionGetGraphIngestState"></a>

```typescript
public readonly actionGetGraphIngestState: string;
```

- *Type:* string

[Read] detective:GetGraphIngestState.

---

##### `actionGetInvestigation`<sup>Required</sup> <a name="actionGetInvestigation" id="@cdk_utils/iam.detective.DetectiveActions.property.actionGetInvestigation"></a>

```typescript
public readonly actionGetInvestigation: string;
```

- *Type:* string

[Read] detective:GetInvestigation.

---

##### `actionGetMembers`<sup>Required</sup> <a name="actionGetMembers" id="@cdk_utils/iam.detective.DetectiveActions.property.actionGetMembers"></a>

```typescript
public readonly actionGetMembers: string;
```

- *Type:* string

[Read] detective:GetMembers.

---

##### `actionGetPricingInformation`<sup>Required</sup> <a name="actionGetPricingInformation" id="@cdk_utils/iam.detective.DetectiveActions.property.actionGetPricingInformation"></a>

```typescript
public readonly actionGetPricingInformation: string;
```

- *Type:* string

[Read] detective:GetPricingInformation.

---

##### `actionGetUsageInformation`<sup>Required</sup> <a name="actionGetUsageInformation" id="@cdk_utils/iam.detective.DetectiveActions.property.actionGetUsageInformation"></a>

```typescript
public readonly actionGetUsageInformation: string;
```

- *Type:* string

[Read] detective:GetUsageInformation.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.detective.DetectiveActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.detective.DetectiveActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.detective.DetectiveActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.detective.DetectiveActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.detective.DetectiveActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchGetGraphMemberDatasources`<sup>Required</sup> <a name="BatchGetGraphMemberDatasources" id="@cdk_utils/iam.detective.DetectiveActions.property.BatchGetGraphMemberDatasources"></a>

```typescript
public readonly BatchGetGraphMemberDatasources: string;
```

- *Type:* string

[Read] detective:BatchGetGraphMemberDatasources.

---

##### `BatchGetMembershipDatasources`<sup>Required</sup> <a name="BatchGetMembershipDatasources" id="@cdk_utils/iam.detective.DetectiveActions.property.BatchGetMembershipDatasources"></a>

```typescript
public readonly BatchGetMembershipDatasources: string;
```

- *Type:* string

[Read] detective:BatchGetMembershipDatasources.

---

##### `CreateGraph`<sup>Required</sup> <a name="CreateGraph" id="@cdk_utils/iam.detective.DetectiveActions.property.CreateGraph"></a>

```typescript
public readonly CreateGraph: string;
```

- *Type:* string

[Write] detective:CreateGraph.

---

##### `CreateMembers`<sup>Required</sup> <a name="CreateMembers" id="@cdk_utils/iam.detective.DetectiveActions.property.CreateMembers"></a>

```typescript
public readonly CreateMembers: string;
```

- *Type:* string

[Write] detective:CreateMembers.

---

##### `DeleteGraph`<sup>Required</sup> <a name="DeleteGraph" id="@cdk_utils/iam.detective.DetectiveActions.property.DeleteGraph"></a>

```typescript
public readonly DeleteGraph: string;
```

- *Type:* string

[Write] detective:DeleteGraph.

---

##### `DeleteMembers`<sup>Required</sup> <a name="DeleteMembers" id="@cdk_utils/iam.detective.DetectiveActions.property.DeleteMembers"></a>

```typescript
public readonly DeleteMembers: string;
```

- *Type:* string

[Write] detective:DeleteMembers.

---

##### `DescribeOrganizationConfiguration`<sup>Required</sup> <a name="DescribeOrganizationConfiguration" id="@cdk_utils/iam.detective.DetectiveActions.property.DescribeOrganizationConfiguration"></a>

```typescript
public readonly DescribeOrganizationConfiguration: string;
```

- *Type:* string

[Read] detective:DescribeOrganizationConfiguration.

---

##### `DisableOrganizationAdminAccount`<sup>Required</sup> <a name="DisableOrganizationAdminAccount" id="@cdk_utils/iam.detective.DetectiveActions.property.DisableOrganizationAdminAccount"></a>

```typescript
public readonly DisableOrganizationAdminAccount: string;
```

- *Type:* string

[Write] detective:DisableOrganizationAdminAccount.

---

##### `DisassociateMembership`<sup>Required</sup> <a name="DisassociateMembership" id="@cdk_utils/iam.detective.DetectiveActions.property.DisassociateMembership"></a>

```typescript
public readonly DisassociateMembership: string;
```

- *Type:* string

[Write] detective:DisassociateMembership.

---

##### `EnableOrganizationAdminAccount`<sup>Required</sup> <a name="EnableOrganizationAdminAccount" id="@cdk_utils/iam.detective.DetectiveActions.property.EnableOrganizationAdminAccount"></a>

```typescript
public readonly EnableOrganizationAdminAccount: string;
```

- *Type:* string

[Write] detective:EnableOrganizationAdminAccount.

---

##### `InvokeAssistant`<sup>Required</sup> <a name="InvokeAssistant" id="@cdk_utils/iam.detective.DetectiveActions.property.InvokeAssistant"></a>

```typescript
public readonly InvokeAssistant: string;
```

- *Type:* string

[Read] detective:InvokeAssistant.

---

##### `ListDatasourcePackages`<sup>Required</sup> <a name="ListDatasourcePackages" id="@cdk_utils/iam.detective.DetectiveActions.property.ListDatasourcePackages"></a>

```typescript
public readonly ListDatasourcePackages: string;
```

- *Type:* string

[List] detective:ListDatasourcePackages.

---

##### `ListGraphs`<sup>Required</sup> <a name="ListGraphs" id="@cdk_utils/iam.detective.DetectiveActions.property.ListGraphs"></a>

```typescript
public readonly ListGraphs: string;
```

- *Type:* string

[List] detective:ListGraphs.

---

##### `ListHighDegreeEntities`<sup>Required</sup> <a name="ListHighDegreeEntities" id="@cdk_utils/iam.detective.DetectiveActions.property.ListHighDegreeEntities"></a>

```typescript
public readonly ListHighDegreeEntities: string;
```

- *Type:* string

[List] detective:ListHighDegreeEntities.

---

##### `ListIndicators`<sup>Required</sup> <a name="ListIndicators" id="@cdk_utils/iam.detective.DetectiveActions.property.ListIndicators"></a>

```typescript
public readonly ListIndicators: string;
```

- *Type:* string

[List] detective:ListIndicators.

---

##### `ListInvestigations`<sup>Required</sup> <a name="ListInvestigations" id="@cdk_utils/iam.detective.DetectiveActions.property.ListInvestigations"></a>

```typescript
public readonly ListInvestigations: string;
```

- *Type:* string

[List] detective:ListInvestigations.

---

##### `ListInvitations`<sup>Required</sup> <a name="ListInvitations" id="@cdk_utils/iam.detective.DetectiveActions.property.ListInvitations"></a>

```typescript
public readonly ListInvitations: string;
```

- *Type:* string

[List] detective:ListInvitations.

---

##### `ListMembers`<sup>Required</sup> <a name="ListMembers" id="@cdk_utils/iam.detective.DetectiveActions.property.ListMembers"></a>

```typescript
public readonly ListMembers: string;
```

- *Type:* string

[List] detective:ListMembers.

---

##### `ListOrganizationAdminAccount`<sup>Required</sup> <a name="ListOrganizationAdminAccount" id="@cdk_utils/iam.detective.DetectiveActions.property.ListOrganizationAdminAccount"></a>

```typescript
public readonly ListOrganizationAdminAccount: string;
```

- *Type:* string

[List] detective:ListOrganizationAdminAccount.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.detective.DetectiveActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] detective:ListTagsForResource.

---

##### `RejectInvitation`<sup>Required</sup> <a name="RejectInvitation" id="@cdk_utils/iam.detective.DetectiveActions.property.RejectInvitation"></a>

```typescript
public readonly RejectInvitation: string;
```

- *Type:* string

[Write] detective:RejectInvitation.

---

##### `SearchGraph`<sup>Required</sup> <a name="SearchGraph" id="@cdk_utils/iam.detective.DetectiveActions.property.SearchGraph"></a>

```typescript
public readonly SearchGraph: string;
```

- *Type:* string

[Read] detective:SearchGraph.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.detective.DetectiveActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartInvestigation`<sup>Required</sup> <a name="StartInvestigation" id="@cdk_utils/iam.detective.DetectiveActions.property.StartInvestigation"></a>

```typescript
public readonly StartInvestigation: string;
```

- *Type:* string

[Write] detective:StartInvestigation.

---

##### `StartMonitoringMember`<sup>Required</sup> <a name="StartMonitoringMember" id="@cdk_utils/iam.detective.DetectiveActions.property.StartMonitoringMember"></a>

```typescript
public readonly StartMonitoringMember: string;
```

- *Type:* string

[Write] detective:StartMonitoringMember.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.detective.DetectiveActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] detective:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.detective.DetectiveActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] detective:UntagResource.

---

##### `UpdateDatasourcePackages`<sup>Required</sup> <a name="UpdateDatasourcePackages" id="@cdk_utils/iam.detective.DetectiveActions.property.UpdateDatasourcePackages"></a>

```typescript
public readonly UpdateDatasourcePackages: string;
```

- *Type:* string

[Write] detective:UpdateDatasourcePackages.

---

##### `UpdateInvestigationState`<sup>Required</sup> <a name="UpdateInvestigationState" id="@cdk_utils/iam.detective.DetectiveActions.property.UpdateInvestigationState"></a>

```typescript
public readonly UpdateInvestigationState: string;
```

- *Type:* string

[Write] detective:UpdateInvestigationState.

---

##### `UpdateOrganizationConfiguration`<sup>Required</sup> <a name="UpdateOrganizationConfiguration" id="@cdk_utils/iam.detective.DetectiveActions.property.UpdateOrganizationConfiguration"></a>

```typescript
public readonly UpdateOrganizationConfiguration: string;
```

- *Type:* string

[Write] detective:UpdateOrganizationConfiguration.

---

### DetectiveConditions <a name="DetectiveConditions" id="@cdk_utils/iam.detective.DetectiveConditions"></a>

Condition key constants and builders for detective.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.detective.DetectiveConditions.Initializer"></a>

```typescript
import { detective } from '@cdk_utils/iam'

new detective.DetectiveConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.detective.DetectiveConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.detective.DetectiveConditions.requestTag"></a>

```typescript
import { detective } from '@cdk_utils/iam'

detective.DetectiveConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.detective.DetectiveConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.detective.DetectiveConditions.resourceTag"></a>

```typescript
import { detective } from '@cdk_utils/iam'

detective.DetectiveConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.detective.DetectiveConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.detective.DetectiveConditions.tagKeys"></a>

```typescript
import { detective } from '@cdk_utils/iam'

detective.DetectiveConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.detective.DetectiveConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.detective.DetectiveConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.detective.DetectiveConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.detective.DetectiveConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.detective.DetectiveConditions.property.CreateGraphConditionKeys">CreateGraphConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateGraph action. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.detective.DetectiveConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.detective.DetectiveConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.detective.DetectiveConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateGraphConditionKeys`<sup>Required</sup> <a name="CreateGraphConditionKeys" id="@cdk_utils/iam.detective.DetectiveConditions.property.CreateGraphConditionKeys"></a>

```typescript
public readonly CreateGraphConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateGraph action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.detective.DetectiveConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.detective.DetectiveConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.detective.DetectiveConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### DetectiveOperations <a name="DetectiveOperations" id="@cdk_utils/iam.detective.DetectiveOperations"></a>

API operation to required IAM actions mapping for detective.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.detective.DetectiveOperations.Initializer"></a>

```typescript
import { detective } from '@cdk_utils/iam'

new detective.DetectiveOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.AcceptInvitation">AcceptInvitation</a></code> | <code>string[]</code> | IAM actions required for the AcceptInvitation API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.BatchGetGraphMemberDatasources">BatchGetGraphMemberDatasources</a></code> | <code>string[]</code> | IAM actions required for the BatchGetGraphMemberDatasources API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.BatchGetMembershipDatasources">BatchGetMembershipDatasources</a></code> | <code>string[]</code> | IAM actions required for the BatchGetMembershipDatasources API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.CreateGraph">CreateGraph</a></code> | <code>string[]</code> | IAM actions required for the CreateGraph API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.CreateMembers">CreateMembers</a></code> | <code>string[]</code> | IAM actions required for the CreateMembers API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.DeleteGraph">DeleteGraph</a></code> | <code>string[]</code> | IAM actions required for the DeleteGraph API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.DeleteMembers">DeleteMembers</a></code> | <code>string[]</code> | IAM actions required for the DeleteMembers API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.DescribeOrganizationConfiguration">DescribeOrganizationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeOrganizationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.DisableOrganizationAdminAccount">DisableOrganizationAdminAccount</a></code> | <code>string[]</code> | IAM actions required for the DisableOrganizationAdminAccount API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.DisassociateMembership">DisassociateMembership</a></code> | <code>string[]</code> | IAM actions required for the DisassociateMembership API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.EnableOrganizationAdminAccount">EnableOrganizationAdminAccount</a></code> | <code>string[]</code> | IAM actions required for the EnableOrganizationAdminAccount API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.ListDatasourcePackages">ListDatasourcePackages</a></code> | <code>string[]</code> | IAM actions required for the ListDatasourcePackages API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.ListGraphs">ListGraphs</a></code> | <code>string[]</code> | IAM actions required for the ListGraphs API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.ListIndicators">ListIndicators</a></code> | <code>string[]</code> | IAM actions required for the ListIndicators API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.ListInvestigations">ListInvestigations</a></code> | <code>string[]</code> | IAM actions required for the ListInvestigations API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.ListInvitations">ListInvitations</a></code> | <code>string[]</code> | IAM actions required for the ListInvitations API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.ListMembers">ListMembers</a></code> | <code>string[]</code> | IAM actions required for the ListMembers API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.ListOrganizationAdminAccounts">ListOrganizationAdminAccounts</a></code> | <code>string[]</code> | IAM actions required for the ListOrganizationAdminAccounts API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.opGetInvestigation">opGetInvestigation</a></code> | <code>string[]</code> | IAM actions required for the GetInvestigation API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.opGetMembers">opGetMembers</a></code> | <code>string[]</code> | IAM actions required for the GetMembers API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.RejectInvitation">RejectInvitation</a></code> | <code>string[]</code> | IAM actions required for the RejectInvitation API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.StartInvestigation">StartInvestigation</a></code> | <code>string[]</code> | IAM actions required for the StartInvestigation API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.StartMonitoringMember">StartMonitoringMember</a></code> | <code>string[]</code> | IAM actions required for the StartMonitoringMember API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.UpdateDatasourcePackages">UpdateDatasourcePackages</a></code> | <code>string[]</code> | IAM actions required for the UpdateDatasourcePackages API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.UpdateInvestigationState">UpdateInvestigationState</a></code> | <code>string[]</code> | IAM actions required for the UpdateInvestigationState API call. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveOperations.property.UpdateOrganizationConfiguration">UpdateOrganizationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateOrganizationConfiguration API call. |

---

##### `AcceptInvitation`<sup>Required</sup> <a name="AcceptInvitation" id="@cdk_utils/iam.detective.DetectiveOperations.property.AcceptInvitation"></a>

```typescript
public readonly AcceptInvitation: string[];
```

- *Type:* string[]

IAM actions required for the AcceptInvitation API call.

---

##### `BatchGetGraphMemberDatasources`<sup>Required</sup> <a name="BatchGetGraphMemberDatasources" id="@cdk_utils/iam.detective.DetectiveOperations.property.BatchGetGraphMemberDatasources"></a>

```typescript
public readonly BatchGetGraphMemberDatasources: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetGraphMemberDatasources API call.

---

##### `BatchGetMembershipDatasources`<sup>Required</sup> <a name="BatchGetMembershipDatasources" id="@cdk_utils/iam.detective.DetectiveOperations.property.BatchGetMembershipDatasources"></a>

```typescript
public readonly BatchGetMembershipDatasources: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetMembershipDatasources API call.

---

##### `CreateGraph`<sup>Required</sup> <a name="CreateGraph" id="@cdk_utils/iam.detective.DetectiveOperations.property.CreateGraph"></a>

```typescript
public readonly CreateGraph: string[];
```

- *Type:* string[]

IAM actions required for the CreateGraph API call.

---

##### `CreateMembers`<sup>Required</sup> <a name="CreateMembers" id="@cdk_utils/iam.detective.DetectiveOperations.property.CreateMembers"></a>

```typescript
public readonly CreateMembers: string[];
```

- *Type:* string[]

IAM actions required for the CreateMembers API call.

---

##### `DeleteGraph`<sup>Required</sup> <a name="DeleteGraph" id="@cdk_utils/iam.detective.DetectiveOperations.property.DeleteGraph"></a>

```typescript
public readonly DeleteGraph: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGraph API call.

---

##### `DeleteMembers`<sup>Required</sup> <a name="DeleteMembers" id="@cdk_utils/iam.detective.DetectiveOperations.property.DeleteMembers"></a>

```typescript
public readonly DeleteMembers: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMembers API call.

---

##### `DescribeOrganizationConfiguration`<sup>Required</sup> <a name="DescribeOrganizationConfiguration" id="@cdk_utils/iam.detective.DetectiveOperations.property.DescribeOrganizationConfiguration"></a>

```typescript
public readonly DescribeOrganizationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOrganizationConfiguration API call.

---

##### `DisableOrganizationAdminAccount`<sup>Required</sup> <a name="DisableOrganizationAdminAccount" id="@cdk_utils/iam.detective.DetectiveOperations.property.DisableOrganizationAdminAccount"></a>

```typescript
public readonly DisableOrganizationAdminAccount: string[];
```

- *Type:* string[]

IAM actions required for the DisableOrganizationAdminAccount API call.

---

##### `DisassociateMembership`<sup>Required</sup> <a name="DisassociateMembership" id="@cdk_utils/iam.detective.DetectiveOperations.property.DisassociateMembership"></a>

```typescript
public readonly DisassociateMembership: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateMembership API call.

---

##### `EnableOrganizationAdminAccount`<sup>Required</sup> <a name="EnableOrganizationAdminAccount" id="@cdk_utils/iam.detective.DetectiveOperations.property.EnableOrganizationAdminAccount"></a>

```typescript
public readonly EnableOrganizationAdminAccount: string[];
```

- *Type:* string[]

IAM actions required for the EnableOrganizationAdminAccount API call.

---

##### `ListDatasourcePackages`<sup>Required</sup> <a name="ListDatasourcePackages" id="@cdk_utils/iam.detective.DetectiveOperations.property.ListDatasourcePackages"></a>

```typescript
public readonly ListDatasourcePackages: string[];
```

- *Type:* string[]

IAM actions required for the ListDatasourcePackages API call.

---

##### `ListGraphs`<sup>Required</sup> <a name="ListGraphs" id="@cdk_utils/iam.detective.DetectiveOperations.property.ListGraphs"></a>

```typescript
public readonly ListGraphs: string[];
```

- *Type:* string[]

IAM actions required for the ListGraphs API call.

---

##### `ListIndicators`<sup>Required</sup> <a name="ListIndicators" id="@cdk_utils/iam.detective.DetectiveOperations.property.ListIndicators"></a>

```typescript
public readonly ListIndicators: string[];
```

- *Type:* string[]

IAM actions required for the ListIndicators API call.

---

##### `ListInvestigations`<sup>Required</sup> <a name="ListInvestigations" id="@cdk_utils/iam.detective.DetectiveOperations.property.ListInvestigations"></a>

```typescript
public readonly ListInvestigations: string[];
```

- *Type:* string[]

IAM actions required for the ListInvestigations API call.

---

##### `ListInvitations`<sup>Required</sup> <a name="ListInvitations" id="@cdk_utils/iam.detective.DetectiveOperations.property.ListInvitations"></a>

```typescript
public readonly ListInvitations: string[];
```

- *Type:* string[]

IAM actions required for the ListInvitations API call.

---

##### `ListMembers`<sup>Required</sup> <a name="ListMembers" id="@cdk_utils/iam.detective.DetectiveOperations.property.ListMembers"></a>

```typescript
public readonly ListMembers: string[];
```

- *Type:* string[]

IAM actions required for the ListMembers API call.

---

##### `ListOrganizationAdminAccounts`<sup>Required</sup> <a name="ListOrganizationAdminAccounts" id="@cdk_utils/iam.detective.DetectiveOperations.property.ListOrganizationAdminAccounts"></a>

```typescript
public readonly ListOrganizationAdminAccounts: string[];
```

- *Type:* string[]

IAM actions required for the ListOrganizationAdminAccounts API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.detective.DetectiveOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetInvestigation`<sup>Required</sup> <a name="opGetInvestigation" id="@cdk_utils/iam.detective.DetectiveOperations.property.opGetInvestigation"></a>

```typescript
public readonly opGetInvestigation: string[];
```

- *Type:* string[]

IAM actions required for the GetInvestigation API call.

---

##### `opGetMembers`<sup>Required</sup> <a name="opGetMembers" id="@cdk_utils/iam.detective.DetectiveOperations.property.opGetMembers"></a>

```typescript
public readonly opGetMembers: string[];
```

- *Type:* string[]

IAM actions required for the GetMembers API call.

---

##### `RejectInvitation`<sup>Required</sup> <a name="RejectInvitation" id="@cdk_utils/iam.detective.DetectiveOperations.property.RejectInvitation"></a>

```typescript
public readonly RejectInvitation: string[];
```

- *Type:* string[]

IAM actions required for the RejectInvitation API call.

---

##### `StartInvestigation`<sup>Required</sup> <a name="StartInvestigation" id="@cdk_utils/iam.detective.DetectiveOperations.property.StartInvestigation"></a>

```typescript
public readonly StartInvestigation: string[];
```

- *Type:* string[]

IAM actions required for the StartInvestigation API call.

---

##### `StartMonitoringMember`<sup>Required</sup> <a name="StartMonitoringMember" id="@cdk_utils/iam.detective.DetectiveOperations.property.StartMonitoringMember"></a>

```typescript
public readonly StartMonitoringMember: string[];
```

- *Type:* string[]

IAM actions required for the StartMonitoringMember API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.detective.DetectiveOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.detective.DetectiveOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateDatasourcePackages`<sup>Required</sup> <a name="UpdateDatasourcePackages" id="@cdk_utils/iam.detective.DetectiveOperations.property.UpdateDatasourcePackages"></a>

```typescript
public readonly UpdateDatasourcePackages: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDatasourcePackages API call.

---

##### `UpdateInvestigationState`<sup>Required</sup> <a name="UpdateInvestigationState" id="@cdk_utils/iam.detective.DetectiveOperations.property.UpdateInvestigationState"></a>

```typescript
public readonly UpdateInvestigationState: string[];
```

- *Type:* string[]

IAM actions required for the UpdateInvestigationState API call.

---

##### `UpdateOrganizationConfiguration`<sup>Required</sup> <a name="UpdateOrganizationConfiguration" id="@cdk_utils/iam.detective.DetectiveOperations.property.UpdateOrganizationConfiguration"></a>

```typescript
public readonly UpdateOrganizationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateOrganizationConfiguration API call.

---

### DetectiveResources <a name="DetectiveResources" id="@cdk_utils/iam.detective.DetectiveResources"></a>

ARN builders, validators, and parsers for detective resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.detective.DetectiveResources.Initializer"></a>

```typescript
import { detective } from '@cdk_utils/iam'

new detective.DetectiveResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.detective.DetectiveResources.graph">graph</a></code> | Builds an ARN for the Graph resource. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveResources.isValidGraphArn">isValidGraphArn</a></code> | Validates whether a string is a valid ARN for the Graph resource. |
| <code><a href="#@cdk_utils/iam.detective.DetectiveResources.parseGraphArn">parseGraphArn</a></code> | Parses a Graph ARN into its components. |

---

##### `graph` <a name="graph" id="@cdk_utils/iam.detective.DetectiveResources.graph"></a>

```typescript
import { detective } from '@cdk_utils/iam'

detective.DetectiveResources.graph(props: DetectiveGraphArnProps)
```

Builds an ARN for the Graph resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.detective.DetectiveResources.graph.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.detective.DetectiveGraphArnProps">DetectiveGraphArnProps</a>

---

##### `isValidGraphArn` <a name="isValidGraphArn" id="@cdk_utils/iam.detective.DetectiveResources.isValidGraphArn"></a>

```typescript
import { detective } from '@cdk_utils/iam'

detective.DetectiveResources.isValidGraphArn(arn: string)
```

Validates whether a string is a valid ARN for the Graph resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.detective.DetectiveResources.isValidGraphArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGraphArn` <a name="parseGraphArn" id="@cdk_utils/iam.detective.DetectiveResources.parseGraphArn"></a>

```typescript
import { detective } from '@cdk_utils/iam'

detective.DetectiveResources.parseGraphArn(arn: string)
```

Parses a Graph ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.detective.DetectiveResources.parseGraphArn.parameter.arn"></a>

- *Type:* string

---




