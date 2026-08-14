# `aiops` Submodule <a name="`aiops` Submodule" id="@cdk_utils/iam.aiops"></a>


## Structs <a name="Structs" id="Structs"></a>

### AiopsInvestigationGroupArnComponents <a name="AiopsInvestigationGroupArnComponents" id="@cdk_utils/iam.aiops.AiopsInvestigationGroupArnComponents"></a>

Parsed components of a investigation-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aiops.AiopsInvestigationGroupArnComponents.Initializer"></a>

```typescript
import { aiops } from '@cdk_utils/iam'

const aiopsInvestigationGroupArnComponents: aiops.AiopsInvestigationGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aiops.AiopsInvestigationGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsInvestigationGroupArnComponents.property.investigationGroupId">investigationGroupId</a></code> | <code>string</code> | The InvestigationGroupId component. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsInvestigationGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsInvestigationGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aiops.AiopsInvestigationGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `investigationGroupId`<sup>Required</sup> <a name="investigationGroupId" id="@cdk_utils/iam.aiops.AiopsInvestigationGroupArnComponents.property.investigationGroupId"></a>

```typescript
public readonly investigationGroupId: string;
```

- *Type:* string

The InvestigationGroupId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aiops.AiopsInvestigationGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aiops.AiopsInvestigationGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AiopsInvestigationGroupArnProps <a name="AiopsInvestigationGroupArnProps" id="@cdk_utils/iam.aiops.AiopsInvestigationGroupArnProps"></a>

Properties for building a investigation-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aiops.AiopsInvestigationGroupArnProps.Initializer"></a>

```typescript
import { aiops } from '@cdk_utils/iam'

const aiopsInvestigationGroupArnProps: aiops.AiopsInvestigationGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aiops.AiopsInvestigationGroupArnProps.property.investigationGroupId">investigationGroupId</a></code> | <code>string</code> | The InvestigationGroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsInvestigationGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsInvestigationGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsInvestigationGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `investigationGroupId`<sup>Required</sup> <a name="investigationGroupId" id="@cdk_utils/iam.aiops.AiopsInvestigationGroupArnProps.property.investigationGroupId"></a>

```typescript
public readonly investigationGroupId: string;
```

- *Type:* string

The InvestigationGroupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aiops.AiopsInvestigationGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aiops.AiopsInvestigationGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aiops.AiopsInvestigationGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### AiopsActions <a name="AiopsActions" id="@cdk_utils/iam.aiops.AiopsActions"></a>

IAM action constants for the aiops service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aiops.AiopsActions.Initializer"></a>

```typescript
import { aiops } from '@cdk_utils/iam'

new aiops.AiopsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.actionGetEphemeralInvestigationResults">actionGetEphemeralInvestigationResults</a></code> | <code>string</code> | [List] aiops:GetEphemeralInvestigationResults. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.actionGetFact">actionGetFact</a></code> | <code>string</code> | [Read] aiops:GetFact. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.actionGetFactVersions">actionGetFactVersions</a></code> | <code>string</code> | [Read] aiops:GetFactVersions. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.actionGetInvestigation">actionGetInvestigation</a></code> | <code>string</code> | [Read] aiops:GetInvestigation. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.actionGetInvestigationEvent">actionGetInvestigationEvent</a></code> | <code>string</code> | [Read] aiops:GetInvestigationEvent. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.actionGetInvestigationGroup">actionGetInvestigationGroup</a></code> | <code>string</code> | [Read] aiops:GetInvestigationGroup. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.actionGetInvestigationGroupPolicy">actionGetInvestigationGroupPolicy</a></code> | <code>string</code> | [Read] aiops:GetInvestigationGroupPolicy. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.actionGetInvestigationResource">actionGetInvestigationResource</a></code> | <code>string</code> | [Read] aiops:GetInvestigationResource. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.actionGetReport">actionGetReport</a></code> | <code>string</code> | [Read] aiops:GetReport. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.CreateInvestigation">CreateInvestigation</a></code> | <code>string</code> | [Write] aiops:CreateInvestigation. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.CreateInvestigationEvent">CreateInvestigationEvent</a></code> | <code>string</code> | [Write] aiops:CreateInvestigationEvent. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.CreateInvestigationGroup">CreateInvestigationGroup</a></code> | <code>string</code> | [Write] aiops:CreateInvestigationGroup. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.CreateInvestigationResource">CreateInvestigationResource</a></code> | <code>string</code> | [Write] aiops:CreateInvestigationResource. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.CreateReport">CreateReport</a></code> | <code>string</code> | [Write] aiops:CreateReport. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.DeleteInvestigation">DeleteInvestigation</a></code> | <code>string</code> | [Write] aiops:DeleteInvestigation. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.DeleteInvestigationGroup">DeleteInvestigationGroup</a></code> | <code>string</code> | [Write] aiops:DeleteInvestigationGroup. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.DeleteInvestigationGroupPolicy">DeleteInvestigationGroupPolicy</a></code> | <code>string</code> | [Write] aiops:DeleteInvestigationGroupPolicy. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.GenerateReport">GenerateReport</a></code> | <code>string</code> | [Write] aiops:GenerateReport. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.ListFacts">ListFacts</a></code> | <code>string</code> | [List] aiops:ListFacts. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.ListInvestigationEvents">ListInvestigationEvents</a></code> | <code>string</code> | [List] aiops:ListInvestigationEvents. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.ListInvestigationGroups">ListInvestigationGroups</a></code> | <code>string</code> | [List] aiops:ListInvestigationGroups. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.ListInvestigations">ListInvestigations</a></code> | <code>string</code> | [List] aiops:ListInvestigations. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.ListReports">ListReports</a></code> | <code>string</code> | [List] aiops:ListReports. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] aiops:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.PutFact">PutFact</a></code> | <code>string</code> | [Write] aiops:PutFact. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.PutInvestigationGroupPolicy">PutInvestigationGroupPolicy</a></code> | <code>string</code> | [Write] aiops:PutInvestigationGroupPolicy. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] aiops:TagResource. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] aiops:UntagResource. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.UpdateInvestigation">UpdateInvestigation</a></code> | <code>string</code> | [Write] aiops:UpdateInvestigation. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.UpdateInvestigationEvent">UpdateInvestigationEvent</a></code> | <code>string</code> | [Write] aiops:UpdateInvestigationEvent. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.UpdateInvestigationGroup">UpdateInvestigationGroup</a></code> | <code>string</code> | [Write] aiops:UpdateInvestigationGroup. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.UpdateReport">UpdateReport</a></code> | <code>string</code> | [Write] aiops:UpdateReport. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsActions.property.ValidateInvestigationGroup">ValidateInvestigationGroup</a></code> | <code>string</code> | [Read] aiops:ValidateInvestigationGroup. |

---

##### `actionGetEphemeralInvestigationResults`<sup>Required</sup> <a name="actionGetEphemeralInvestigationResults" id="@cdk_utils/iam.aiops.AiopsActions.property.actionGetEphemeralInvestigationResults"></a>

```typescript
public readonly actionGetEphemeralInvestigationResults: string;
```

- *Type:* string

[List] aiops:GetEphemeralInvestigationResults.

---

##### `actionGetFact`<sup>Required</sup> <a name="actionGetFact" id="@cdk_utils/iam.aiops.AiopsActions.property.actionGetFact"></a>

```typescript
public readonly actionGetFact: string;
```

- *Type:* string

[Read] aiops:GetFact.

---

##### `actionGetFactVersions`<sup>Required</sup> <a name="actionGetFactVersions" id="@cdk_utils/iam.aiops.AiopsActions.property.actionGetFactVersions"></a>

```typescript
public readonly actionGetFactVersions: string;
```

- *Type:* string

[Read] aiops:GetFactVersions.

---

##### `actionGetInvestigation`<sup>Required</sup> <a name="actionGetInvestigation" id="@cdk_utils/iam.aiops.AiopsActions.property.actionGetInvestigation"></a>

```typescript
public readonly actionGetInvestigation: string;
```

- *Type:* string

[Read] aiops:GetInvestigation.

---

##### `actionGetInvestigationEvent`<sup>Required</sup> <a name="actionGetInvestigationEvent" id="@cdk_utils/iam.aiops.AiopsActions.property.actionGetInvestigationEvent"></a>

```typescript
public readonly actionGetInvestigationEvent: string;
```

- *Type:* string

[Read] aiops:GetInvestigationEvent.

---

##### `actionGetInvestigationGroup`<sup>Required</sup> <a name="actionGetInvestigationGroup" id="@cdk_utils/iam.aiops.AiopsActions.property.actionGetInvestigationGroup"></a>

```typescript
public readonly actionGetInvestigationGroup: string;
```

- *Type:* string

[Read] aiops:GetInvestigationGroup.

---

##### `actionGetInvestigationGroupPolicy`<sup>Required</sup> <a name="actionGetInvestigationGroupPolicy" id="@cdk_utils/iam.aiops.AiopsActions.property.actionGetInvestigationGroupPolicy"></a>

```typescript
public readonly actionGetInvestigationGroupPolicy: string;
```

- *Type:* string

[Read] aiops:GetInvestigationGroupPolicy.

---

##### `actionGetInvestigationResource`<sup>Required</sup> <a name="actionGetInvestigationResource" id="@cdk_utils/iam.aiops.AiopsActions.property.actionGetInvestigationResource"></a>

```typescript
public readonly actionGetInvestigationResource: string;
```

- *Type:* string

[Read] aiops:GetInvestigationResource.

---

##### `actionGetReport`<sup>Required</sup> <a name="actionGetReport" id="@cdk_utils/iam.aiops.AiopsActions.property.actionGetReport"></a>

```typescript
public readonly actionGetReport: string;
```

- *Type:* string

[Read] aiops:GetReport.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.aiops.AiopsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.aiops.AiopsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.aiops.AiopsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.aiops.AiopsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.aiops.AiopsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateInvestigation`<sup>Required</sup> <a name="CreateInvestigation" id="@cdk_utils/iam.aiops.AiopsActions.property.CreateInvestigation"></a>

```typescript
public readonly CreateInvestigation: string;
```

- *Type:* string

[Write] aiops:CreateInvestigation.

---

##### `CreateInvestigationEvent`<sup>Required</sup> <a name="CreateInvestigationEvent" id="@cdk_utils/iam.aiops.AiopsActions.property.CreateInvestigationEvent"></a>

```typescript
public readonly CreateInvestigationEvent: string;
```

- *Type:* string

[Write] aiops:CreateInvestigationEvent.

---

##### `CreateInvestigationGroup`<sup>Required</sup> <a name="CreateInvestigationGroup" id="@cdk_utils/iam.aiops.AiopsActions.property.CreateInvestigationGroup"></a>

```typescript
public readonly CreateInvestigationGroup: string;
```

- *Type:* string

[Write] aiops:CreateInvestigationGroup.

---

##### `CreateInvestigationResource`<sup>Required</sup> <a name="CreateInvestigationResource" id="@cdk_utils/iam.aiops.AiopsActions.property.CreateInvestigationResource"></a>

```typescript
public readonly CreateInvestigationResource: string;
```

- *Type:* string

[Write] aiops:CreateInvestigationResource.

---

##### `CreateReport`<sup>Required</sup> <a name="CreateReport" id="@cdk_utils/iam.aiops.AiopsActions.property.CreateReport"></a>

```typescript
public readonly CreateReport: string;
```

- *Type:* string

[Write] aiops:CreateReport.

---

##### `DeleteInvestigation`<sup>Required</sup> <a name="DeleteInvestigation" id="@cdk_utils/iam.aiops.AiopsActions.property.DeleteInvestigation"></a>

```typescript
public readonly DeleteInvestigation: string;
```

- *Type:* string

[Write] aiops:DeleteInvestigation.

---

##### `DeleteInvestigationGroup`<sup>Required</sup> <a name="DeleteInvestigationGroup" id="@cdk_utils/iam.aiops.AiopsActions.property.DeleteInvestigationGroup"></a>

```typescript
public readonly DeleteInvestigationGroup: string;
```

- *Type:* string

[Write] aiops:DeleteInvestigationGroup.

---

##### `DeleteInvestigationGroupPolicy`<sup>Required</sup> <a name="DeleteInvestigationGroupPolicy" id="@cdk_utils/iam.aiops.AiopsActions.property.DeleteInvestigationGroupPolicy"></a>

```typescript
public readonly DeleteInvestigationGroupPolicy: string;
```

- *Type:* string

[Write] aiops:DeleteInvestigationGroupPolicy.

---

##### `GenerateReport`<sup>Required</sup> <a name="GenerateReport" id="@cdk_utils/iam.aiops.AiopsActions.property.GenerateReport"></a>

```typescript
public readonly GenerateReport: string;
```

- *Type:* string

[Write] aiops:GenerateReport.

---

##### `ListFacts`<sup>Required</sup> <a name="ListFacts" id="@cdk_utils/iam.aiops.AiopsActions.property.ListFacts"></a>

```typescript
public readonly ListFacts: string;
```

- *Type:* string

[List] aiops:ListFacts.

---

##### `ListInvestigationEvents`<sup>Required</sup> <a name="ListInvestigationEvents" id="@cdk_utils/iam.aiops.AiopsActions.property.ListInvestigationEvents"></a>

```typescript
public readonly ListInvestigationEvents: string;
```

- *Type:* string

[List] aiops:ListInvestigationEvents.

---

##### `ListInvestigationGroups`<sup>Required</sup> <a name="ListInvestigationGroups" id="@cdk_utils/iam.aiops.AiopsActions.property.ListInvestigationGroups"></a>

```typescript
public readonly ListInvestigationGroups: string;
```

- *Type:* string

[List] aiops:ListInvestigationGroups.

---

##### `ListInvestigations`<sup>Required</sup> <a name="ListInvestigations" id="@cdk_utils/iam.aiops.AiopsActions.property.ListInvestigations"></a>

```typescript
public readonly ListInvestigations: string;
```

- *Type:* string

[List] aiops:ListInvestigations.

---

##### `ListReports`<sup>Required</sup> <a name="ListReports" id="@cdk_utils/iam.aiops.AiopsActions.property.ListReports"></a>

```typescript
public readonly ListReports: string;
```

- *Type:* string

[List] aiops:ListReports.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.aiops.AiopsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] aiops:ListTagsForResource.

---

##### `PutFact`<sup>Required</sup> <a name="PutFact" id="@cdk_utils/iam.aiops.AiopsActions.property.PutFact"></a>

```typescript
public readonly PutFact: string;
```

- *Type:* string

[Write] aiops:PutFact.

---

##### `PutInvestigationGroupPolicy`<sup>Required</sup> <a name="PutInvestigationGroupPolicy" id="@cdk_utils/iam.aiops.AiopsActions.property.PutInvestigationGroupPolicy"></a>

```typescript
public readonly PutInvestigationGroupPolicy: string;
```

- *Type:* string

[Write] aiops:PutInvestigationGroupPolicy.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.aiops.AiopsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.aiops.AiopsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] aiops:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.aiops.AiopsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] aiops:UntagResource.

---

##### `UpdateInvestigation`<sup>Required</sup> <a name="UpdateInvestigation" id="@cdk_utils/iam.aiops.AiopsActions.property.UpdateInvestigation"></a>

```typescript
public readonly UpdateInvestigation: string;
```

- *Type:* string

[Write] aiops:UpdateInvestigation.

---

##### `UpdateInvestigationEvent`<sup>Required</sup> <a name="UpdateInvestigationEvent" id="@cdk_utils/iam.aiops.AiopsActions.property.UpdateInvestigationEvent"></a>

```typescript
public readonly UpdateInvestigationEvent: string;
```

- *Type:* string

[Write] aiops:UpdateInvestigationEvent.

---

##### `UpdateInvestigationGroup`<sup>Required</sup> <a name="UpdateInvestigationGroup" id="@cdk_utils/iam.aiops.AiopsActions.property.UpdateInvestigationGroup"></a>

```typescript
public readonly UpdateInvestigationGroup: string;
```

- *Type:* string

[Write] aiops:UpdateInvestigationGroup.

---

##### `UpdateReport`<sup>Required</sup> <a name="UpdateReport" id="@cdk_utils/iam.aiops.AiopsActions.property.UpdateReport"></a>

```typescript
public readonly UpdateReport: string;
```

- *Type:* string

[Write] aiops:UpdateReport.

---

##### `ValidateInvestigationGroup`<sup>Required</sup> <a name="ValidateInvestigationGroup" id="@cdk_utils/iam.aiops.AiopsActions.property.ValidateInvestigationGroup"></a>

```typescript
public readonly ValidateInvestigationGroup: string;
```

- *Type:* string

[Read] aiops:ValidateInvestigationGroup.

---

### AiopsConditions <a name="AiopsConditions" id="@cdk_utils/iam.aiops.AiopsConditions"></a>

Condition key constants and builders for aiops.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aiops.AiopsConditions.Initializer"></a>

```typescript
import { aiops } from '@cdk_utils/iam'

new aiops.AiopsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.aiops.AiopsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.aiops.AiopsConditions.requestTag"></a>

```typescript
import { aiops } from '@cdk_utils/iam'

aiops.AiopsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.aiops.AiopsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.aiops.AiopsConditions.resourceTag"></a>

```typescript
import { aiops } from '@cdk_utils/iam'

aiops.AiopsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.aiops.AiopsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.aiops.AiopsConditions.tagKeys"></a>

```typescript
import { aiops } from '@cdk_utils/iam'

aiops.AiopsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.aiops.AiopsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aiops.AiopsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.aiops.AiopsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.aiops.AiopsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.aiops.AiopsConditions.property.CreateInvestigationGroupConditionKeys">CreateInvestigationGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateInvestigationGroup action. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.aiops.AiopsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.aiops.AiopsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.aiops.AiopsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateInvestigationGroupConditionKeys`<sup>Required</sup> <a name="CreateInvestigationGroupConditionKeys" id="@cdk_utils/iam.aiops.AiopsConditions.property.CreateInvestigationGroupConditionKeys"></a>

```typescript
public readonly CreateInvestigationGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateInvestigationGroup action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.aiops.AiopsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.aiops.AiopsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### AiopsOperations <a name="AiopsOperations" id="@cdk_utils/iam.aiops.AiopsOperations"></a>

API operation to required IAM actions mapping for aiops.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aiops.AiopsOperations.Initializer"></a>

```typescript
import { aiops } from '@cdk_utils/iam'

new aiops.AiopsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aiops.AiopsOperations.property.CreateInvestigationGroup">CreateInvestigationGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateInvestigationGroup API call. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsOperations.property.DeleteInvestigationGroup">DeleteInvestigationGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteInvestigationGroup API call. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsOperations.property.DeleteInvestigationGroupPolicy">DeleteInvestigationGroupPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteInvestigationGroupPolicy API call. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsOperations.property.ListInvestigationGroups">ListInvestigationGroups</a></code> | <code>string[]</code> | IAM actions required for the ListInvestigationGroups API call. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsOperations.property.opGetInvestigationGroup">opGetInvestigationGroup</a></code> | <code>string[]</code> | IAM actions required for the GetInvestigationGroup API call. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsOperations.property.opGetInvestigationGroupPolicy">opGetInvestigationGroupPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetInvestigationGroupPolicy API call. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsOperations.property.PutInvestigationGroupPolicy">PutInvestigationGroupPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutInvestigationGroupPolicy API call. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsOperations.property.UpdateInvestigationGroup">UpdateInvestigationGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateInvestigationGroup API call. |

---

##### `CreateInvestigationGroup`<sup>Required</sup> <a name="CreateInvestigationGroup" id="@cdk_utils/iam.aiops.AiopsOperations.property.CreateInvestigationGroup"></a>

```typescript
public readonly CreateInvestigationGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateInvestigationGroup API call.

---

##### `DeleteInvestigationGroup`<sup>Required</sup> <a name="DeleteInvestigationGroup" id="@cdk_utils/iam.aiops.AiopsOperations.property.DeleteInvestigationGroup"></a>

```typescript
public readonly DeleteInvestigationGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInvestigationGroup API call.

---

##### `DeleteInvestigationGroupPolicy`<sup>Required</sup> <a name="DeleteInvestigationGroupPolicy" id="@cdk_utils/iam.aiops.AiopsOperations.property.DeleteInvestigationGroupPolicy"></a>

```typescript
public readonly DeleteInvestigationGroupPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInvestigationGroupPolicy API call.

---

##### `ListInvestigationGroups`<sup>Required</sup> <a name="ListInvestigationGroups" id="@cdk_utils/iam.aiops.AiopsOperations.property.ListInvestigationGroups"></a>

```typescript
public readonly ListInvestigationGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListInvestigationGroups API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.aiops.AiopsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetInvestigationGroup`<sup>Required</sup> <a name="opGetInvestigationGroup" id="@cdk_utils/iam.aiops.AiopsOperations.property.opGetInvestigationGroup"></a>

```typescript
public readonly opGetInvestigationGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetInvestigationGroup API call.

---

##### `opGetInvestigationGroupPolicy`<sup>Required</sup> <a name="opGetInvestigationGroupPolicy" id="@cdk_utils/iam.aiops.AiopsOperations.property.opGetInvestigationGroupPolicy"></a>

```typescript
public readonly opGetInvestigationGroupPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetInvestigationGroupPolicy API call.

---

##### `PutInvestigationGroupPolicy`<sup>Required</sup> <a name="PutInvestigationGroupPolicy" id="@cdk_utils/iam.aiops.AiopsOperations.property.PutInvestigationGroupPolicy"></a>

```typescript
public readonly PutInvestigationGroupPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutInvestigationGroupPolicy API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.aiops.AiopsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.aiops.AiopsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateInvestigationGroup`<sup>Required</sup> <a name="UpdateInvestigationGroup" id="@cdk_utils/iam.aiops.AiopsOperations.property.UpdateInvestigationGroup"></a>

```typescript
public readonly UpdateInvestigationGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateInvestigationGroup API call.

---

### AiopsResources <a name="AiopsResources" id="@cdk_utils/iam.aiops.AiopsResources"></a>

ARN builders, validators, and parsers for aiops resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aiops.AiopsResources.Initializer"></a>

```typescript
import { aiops } from '@cdk_utils/iam'

new aiops.AiopsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.aiops.AiopsResources.investigationGroup">investigationGroup</a></code> | Builds an ARN for the investigation-group resource. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsResources.isValidInvestigationGroupArn">isValidInvestigationGroupArn</a></code> | Validates whether a string is a valid ARN for the investigation-group resource. |
| <code><a href="#@cdk_utils/iam.aiops.AiopsResources.parseInvestigationGroupArn">parseInvestigationGroupArn</a></code> | Parses a investigation-group ARN into its components. |

---

##### `investigationGroup` <a name="investigationGroup" id="@cdk_utils/iam.aiops.AiopsResources.investigationGroup"></a>

```typescript
import { aiops } from '@cdk_utils/iam'

aiops.AiopsResources.investigationGroup(props: AiopsInvestigationGroupArnProps)
```

Builds an ARN for the investigation-group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aiops.AiopsResources.investigationGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aiops.AiopsInvestigationGroupArnProps">AiopsInvestigationGroupArnProps</a>

---

##### `isValidInvestigationGroupArn` <a name="isValidInvestigationGroupArn" id="@cdk_utils/iam.aiops.AiopsResources.isValidInvestigationGroupArn"></a>

```typescript
import { aiops } from '@cdk_utils/iam'

aiops.AiopsResources.isValidInvestigationGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the investigation-group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aiops.AiopsResources.isValidInvestigationGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInvestigationGroupArn` <a name="parseInvestigationGroupArn" id="@cdk_utils/iam.aiops.AiopsResources.parseInvestigationGroupArn"></a>

```typescript
import { aiops } from '@cdk_utils/iam'

aiops.AiopsResources.parseInvestigationGroupArn(arn: string)
```

Parses a investigation-group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aiops.AiopsResources.parseInvestigationGroupArn.parameter.arn"></a>

- *Type:* string

---




