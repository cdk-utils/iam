# `inspector` Submodule <a name="`inspector` Submodule" id="@cdk_utils/iam.inspector"></a>



## Classes <a name="Classes" id="Classes"></a>

### InspectorActions <a name="InspectorActions" id="@cdk_utils/iam.inspector.InspectorActions"></a>

IAM action constants for the inspector service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.inspector.InspectorActions.Initializer"></a>

```typescript
import { inspector } from '@cdk_utils/iam'

new inspector.InspectorActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.actionGetAssessmentReport">actionGetAssessmentReport</a></code> | <code>string</code> | [Read] inspector:GetAssessmentReport. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.actionGetExclusionsPreview">actionGetExclusionsPreview</a></code> | <code>string</code> | [Read] inspector:GetExclusionsPreview. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.actionGetTelemetryMetadata">actionGetTelemetryMetadata</a></code> | <code>string</code> | [Read] inspector:GetTelemetryMetadata. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.actionSetTagsForResource">actionSetTagsForResource</a></code> | <code>string</code> | [Tagging] inspector:SetTagsForResource. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.AddAttributesToFindings">AddAttributesToFindings</a></code> | <code>string</code> | [Write] inspector:AddAttributesToFindings. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.CreateAssessmentTarget">CreateAssessmentTarget</a></code> | <code>string</code> | [Write] inspector:CreateAssessmentTarget. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.CreateAssessmentTemplate">CreateAssessmentTemplate</a></code> | <code>string</code> | [Write] inspector:CreateAssessmentTemplate. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.CreateExclusionsPreview">CreateExclusionsPreview</a></code> | <code>string</code> | [Write] inspector:CreateExclusionsPreview. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.CreateResourceGroup">CreateResourceGroup</a></code> | <code>string</code> | [Write] inspector:CreateResourceGroup. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.DeleteAssessmentRun">DeleteAssessmentRun</a></code> | <code>string</code> | [Write] inspector:DeleteAssessmentRun. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.DeleteAssessmentTarget">DeleteAssessmentTarget</a></code> | <code>string</code> | [Write] inspector:DeleteAssessmentTarget. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.DeleteAssessmentTemplate">DeleteAssessmentTemplate</a></code> | <code>string</code> | [Write] inspector:DeleteAssessmentTemplate. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.DescribeAssessmentRuns">DescribeAssessmentRuns</a></code> | <code>string</code> | [Read] inspector:DescribeAssessmentRuns. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.DescribeAssessmentTargets">DescribeAssessmentTargets</a></code> | <code>string</code> | [Read] inspector:DescribeAssessmentTargets. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.DescribeAssessmentTemplates">DescribeAssessmentTemplates</a></code> | <code>string</code> | [Read] inspector:DescribeAssessmentTemplates. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.DescribeCrossAccountAccessRole">DescribeCrossAccountAccessRole</a></code> | <code>string</code> | [Read] inspector:DescribeCrossAccountAccessRole. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.DescribeExclusions">DescribeExclusions</a></code> | <code>string</code> | [Read] inspector:DescribeExclusions. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.DescribeFindings">DescribeFindings</a></code> | <code>string</code> | [Read] inspector:DescribeFindings. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.DescribeResourceGroups">DescribeResourceGroups</a></code> | <code>string</code> | [Read] inspector:DescribeResourceGroups. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.DescribeRulesPackages">DescribeRulesPackages</a></code> | <code>string</code> | [Read] inspector:DescribeRulesPackages. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.ListAssessmentRunAgents">ListAssessmentRunAgents</a></code> | <code>string</code> | [List] inspector:ListAssessmentRunAgents. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.ListAssessmentRuns">ListAssessmentRuns</a></code> | <code>string</code> | [List] inspector:ListAssessmentRuns. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.ListAssessmentTargets">ListAssessmentTargets</a></code> | <code>string</code> | [List] inspector:ListAssessmentTargets. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.ListAssessmentTemplates">ListAssessmentTemplates</a></code> | <code>string</code> | [List] inspector:ListAssessmentTemplates. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.ListEventSubscriptions">ListEventSubscriptions</a></code> | <code>string</code> | [List] inspector:ListEventSubscriptions. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.ListExclusions">ListExclusions</a></code> | <code>string</code> | [List] inspector:ListExclusions. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.ListFindings">ListFindings</a></code> | <code>string</code> | [List] inspector:ListFindings. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.ListRulesPackages">ListRulesPackages</a></code> | <code>string</code> | [List] inspector:ListRulesPackages. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] inspector:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.PreviewAgents">PreviewAgents</a></code> | <code>string</code> | [Read] inspector:PreviewAgents. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.RegisterCrossAccountAccessRole">RegisterCrossAccountAccessRole</a></code> | <code>string</code> | [Write] inspector:RegisterCrossAccountAccessRole. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.RemoveAttributesFromFindings">RemoveAttributesFromFindings</a></code> | <code>string</code> | [Write] inspector:RemoveAttributesFromFindings. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.StartAssessmentRun">StartAssessmentRun</a></code> | <code>string</code> | [Write] inspector:StartAssessmentRun. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.StopAssessmentRun">StopAssessmentRun</a></code> | <code>string</code> | [Write] inspector:StopAssessmentRun. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.SubscribeToEvent">SubscribeToEvent</a></code> | <code>string</code> | [Write] inspector:SubscribeToEvent. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.UnsubscribeFromEvent">UnsubscribeFromEvent</a></code> | <code>string</code> | [Write] inspector:UnsubscribeFromEvent. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorActions.property.UpdateAssessmentTarget">UpdateAssessmentTarget</a></code> | <code>string</code> | [Write] inspector:UpdateAssessmentTarget. |

---

##### `actionGetAssessmentReport`<sup>Required</sup> <a name="actionGetAssessmentReport" id="@cdk_utils/iam.inspector.InspectorActions.property.actionGetAssessmentReport"></a>

```typescript
public readonly actionGetAssessmentReport: string;
```

- *Type:* string

[Read] inspector:GetAssessmentReport.

---

##### `actionGetExclusionsPreview`<sup>Required</sup> <a name="actionGetExclusionsPreview" id="@cdk_utils/iam.inspector.InspectorActions.property.actionGetExclusionsPreview"></a>

```typescript
public readonly actionGetExclusionsPreview: string;
```

- *Type:* string

[Read] inspector:GetExclusionsPreview.

---

##### `actionGetTelemetryMetadata`<sup>Required</sup> <a name="actionGetTelemetryMetadata" id="@cdk_utils/iam.inspector.InspectorActions.property.actionGetTelemetryMetadata"></a>

```typescript
public readonly actionGetTelemetryMetadata: string;
```

- *Type:* string

[Read] inspector:GetTelemetryMetadata.

---

##### `actionSetTagsForResource`<sup>Required</sup> <a name="actionSetTagsForResource" id="@cdk_utils/iam.inspector.InspectorActions.property.actionSetTagsForResource"></a>

```typescript
public readonly actionSetTagsForResource: string;
```

- *Type:* string

[Tagging] inspector:SetTagsForResource.

---

##### `AddAttributesToFindings`<sup>Required</sup> <a name="AddAttributesToFindings" id="@cdk_utils/iam.inspector.InspectorActions.property.AddAttributesToFindings"></a>

```typescript
public readonly AddAttributesToFindings: string;
```

- *Type:* string

[Write] inspector:AddAttributesToFindings.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.inspector.InspectorActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.inspector.InspectorActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.inspector.InspectorActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.inspector.InspectorActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.inspector.InspectorActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateAssessmentTarget`<sup>Required</sup> <a name="CreateAssessmentTarget" id="@cdk_utils/iam.inspector.InspectorActions.property.CreateAssessmentTarget"></a>

```typescript
public readonly CreateAssessmentTarget: string;
```

- *Type:* string

[Write] inspector:CreateAssessmentTarget.

---

##### `CreateAssessmentTemplate`<sup>Required</sup> <a name="CreateAssessmentTemplate" id="@cdk_utils/iam.inspector.InspectorActions.property.CreateAssessmentTemplate"></a>

```typescript
public readonly CreateAssessmentTemplate: string;
```

- *Type:* string

[Write] inspector:CreateAssessmentTemplate.

---

##### `CreateExclusionsPreview`<sup>Required</sup> <a name="CreateExclusionsPreview" id="@cdk_utils/iam.inspector.InspectorActions.property.CreateExclusionsPreview"></a>

```typescript
public readonly CreateExclusionsPreview: string;
```

- *Type:* string

[Write] inspector:CreateExclusionsPreview.

---

##### `CreateResourceGroup`<sup>Required</sup> <a name="CreateResourceGroup" id="@cdk_utils/iam.inspector.InspectorActions.property.CreateResourceGroup"></a>

```typescript
public readonly CreateResourceGroup: string;
```

- *Type:* string

[Write] inspector:CreateResourceGroup.

---

##### `DeleteAssessmentRun`<sup>Required</sup> <a name="DeleteAssessmentRun" id="@cdk_utils/iam.inspector.InspectorActions.property.DeleteAssessmentRun"></a>

```typescript
public readonly DeleteAssessmentRun: string;
```

- *Type:* string

[Write] inspector:DeleteAssessmentRun.

---

##### `DeleteAssessmentTarget`<sup>Required</sup> <a name="DeleteAssessmentTarget" id="@cdk_utils/iam.inspector.InspectorActions.property.DeleteAssessmentTarget"></a>

```typescript
public readonly DeleteAssessmentTarget: string;
```

- *Type:* string

[Write] inspector:DeleteAssessmentTarget.

---

##### `DeleteAssessmentTemplate`<sup>Required</sup> <a name="DeleteAssessmentTemplate" id="@cdk_utils/iam.inspector.InspectorActions.property.DeleteAssessmentTemplate"></a>

```typescript
public readonly DeleteAssessmentTemplate: string;
```

- *Type:* string

[Write] inspector:DeleteAssessmentTemplate.

---

##### `DescribeAssessmentRuns`<sup>Required</sup> <a name="DescribeAssessmentRuns" id="@cdk_utils/iam.inspector.InspectorActions.property.DescribeAssessmentRuns"></a>

```typescript
public readonly DescribeAssessmentRuns: string;
```

- *Type:* string

[Read] inspector:DescribeAssessmentRuns.

---

##### `DescribeAssessmentTargets`<sup>Required</sup> <a name="DescribeAssessmentTargets" id="@cdk_utils/iam.inspector.InspectorActions.property.DescribeAssessmentTargets"></a>

```typescript
public readonly DescribeAssessmentTargets: string;
```

- *Type:* string

[Read] inspector:DescribeAssessmentTargets.

---

##### `DescribeAssessmentTemplates`<sup>Required</sup> <a name="DescribeAssessmentTemplates" id="@cdk_utils/iam.inspector.InspectorActions.property.DescribeAssessmentTemplates"></a>

```typescript
public readonly DescribeAssessmentTemplates: string;
```

- *Type:* string

[Read] inspector:DescribeAssessmentTemplates.

---

##### `DescribeCrossAccountAccessRole`<sup>Required</sup> <a name="DescribeCrossAccountAccessRole" id="@cdk_utils/iam.inspector.InspectorActions.property.DescribeCrossAccountAccessRole"></a>

```typescript
public readonly DescribeCrossAccountAccessRole: string;
```

- *Type:* string

[Read] inspector:DescribeCrossAccountAccessRole.

---

##### `DescribeExclusions`<sup>Required</sup> <a name="DescribeExclusions" id="@cdk_utils/iam.inspector.InspectorActions.property.DescribeExclusions"></a>

```typescript
public readonly DescribeExclusions: string;
```

- *Type:* string

[Read] inspector:DescribeExclusions.

---

##### `DescribeFindings`<sup>Required</sup> <a name="DescribeFindings" id="@cdk_utils/iam.inspector.InspectorActions.property.DescribeFindings"></a>

```typescript
public readonly DescribeFindings: string;
```

- *Type:* string

[Read] inspector:DescribeFindings.

---

##### `DescribeResourceGroups`<sup>Required</sup> <a name="DescribeResourceGroups" id="@cdk_utils/iam.inspector.InspectorActions.property.DescribeResourceGroups"></a>

```typescript
public readonly DescribeResourceGroups: string;
```

- *Type:* string

[Read] inspector:DescribeResourceGroups.

---

##### `DescribeRulesPackages`<sup>Required</sup> <a name="DescribeRulesPackages" id="@cdk_utils/iam.inspector.InspectorActions.property.DescribeRulesPackages"></a>

```typescript
public readonly DescribeRulesPackages: string;
```

- *Type:* string

[Read] inspector:DescribeRulesPackages.

---

##### `ListAssessmentRunAgents`<sup>Required</sup> <a name="ListAssessmentRunAgents" id="@cdk_utils/iam.inspector.InspectorActions.property.ListAssessmentRunAgents"></a>

```typescript
public readonly ListAssessmentRunAgents: string;
```

- *Type:* string

[List] inspector:ListAssessmentRunAgents.

---

##### `ListAssessmentRuns`<sup>Required</sup> <a name="ListAssessmentRuns" id="@cdk_utils/iam.inspector.InspectorActions.property.ListAssessmentRuns"></a>

```typescript
public readonly ListAssessmentRuns: string;
```

- *Type:* string

[List] inspector:ListAssessmentRuns.

---

##### `ListAssessmentTargets`<sup>Required</sup> <a name="ListAssessmentTargets" id="@cdk_utils/iam.inspector.InspectorActions.property.ListAssessmentTargets"></a>

```typescript
public readonly ListAssessmentTargets: string;
```

- *Type:* string

[List] inspector:ListAssessmentTargets.

---

##### `ListAssessmentTemplates`<sup>Required</sup> <a name="ListAssessmentTemplates" id="@cdk_utils/iam.inspector.InspectorActions.property.ListAssessmentTemplates"></a>

```typescript
public readonly ListAssessmentTemplates: string;
```

- *Type:* string

[List] inspector:ListAssessmentTemplates.

---

##### `ListEventSubscriptions`<sup>Required</sup> <a name="ListEventSubscriptions" id="@cdk_utils/iam.inspector.InspectorActions.property.ListEventSubscriptions"></a>

```typescript
public readonly ListEventSubscriptions: string;
```

- *Type:* string

[List] inspector:ListEventSubscriptions.

---

##### `ListExclusions`<sup>Required</sup> <a name="ListExclusions" id="@cdk_utils/iam.inspector.InspectorActions.property.ListExclusions"></a>

```typescript
public readonly ListExclusions: string;
```

- *Type:* string

[List] inspector:ListExclusions.

---

##### `ListFindings`<sup>Required</sup> <a name="ListFindings" id="@cdk_utils/iam.inspector.InspectorActions.property.ListFindings"></a>

```typescript
public readonly ListFindings: string;
```

- *Type:* string

[List] inspector:ListFindings.

---

##### `ListRulesPackages`<sup>Required</sup> <a name="ListRulesPackages" id="@cdk_utils/iam.inspector.InspectorActions.property.ListRulesPackages"></a>

```typescript
public readonly ListRulesPackages: string;
```

- *Type:* string

[List] inspector:ListRulesPackages.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.inspector.InspectorActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] inspector:ListTagsForResource.

---

##### `PreviewAgents`<sup>Required</sup> <a name="PreviewAgents" id="@cdk_utils/iam.inspector.InspectorActions.property.PreviewAgents"></a>

```typescript
public readonly PreviewAgents: string;
```

- *Type:* string

[Read] inspector:PreviewAgents.

---

##### `RegisterCrossAccountAccessRole`<sup>Required</sup> <a name="RegisterCrossAccountAccessRole" id="@cdk_utils/iam.inspector.InspectorActions.property.RegisterCrossAccountAccessRole"></a>

```typescript
public readonly RegisterCrossAccountAccessRole: string;
```

- *Type:* string

[Write] inspector:RegisterCrossAccountAccessRole.

---

##### `RemoveAttributesFromFindings`<sup>Required</sup> <a name="RemoveAttributesFromFindings" id="@cdk_utils/iam.inspector.InspectorActions.property.RemoveAttributesFromFindings"></a>

```typescript
public readonly RemoveAttributesFromFindings: string;
```

- *Type:* string

[Write] inspector:RemoveAttributesFromFindings.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.inspector.InspectorActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartAssessmentRun`<sup>Required</sup> <a name="StartAssessmentRun" id="@cdk_utils/iam.inspector.InspectorActions.property.StartAssessmentRun"></a>

```typescript
public readonly StartAssessmentRun: string;
```

- *Type:* string

[Write] inspector:StartAssessmentRun.

---

##### `StopAssessmentRun`<sup>Required</sup> <a name="StopAssessmentRun" id="@cdk_utils/iam.inspector.InspectorActions.property.StopAssessmentRun"></a>

```typescript
public readonly StopAssessmentRun: string;
```

- *Type:* string

[Write] inspector:StopAssessmentRun.

---

##### `SubscribeToEvent`<sup>Required</sup> <a name="SubscribeToEvent" id="@cdk_utils/iam.inspector.InspectorActions.property.SubscribeToEvent"></a>

```typescript
public readonly SubscribeToEvent: string;
```

- *Type:* string

[Write] inspector:SubscribeToEvent.

---

##### `UnsubscribeFromEvent`<sup>Required</sup> <a name="UnsubscribeFromEvent" id="@cdk_utils/iam.inspector.InspectorActions.property.UnsubscribeFromEvent"></a>

```typescript
public readonly UnsubscribeFromEvent: string;
```

- *Type:* string

[Write] inspector:UnsubscribeFromEvent.

---

##### `UpdateAssessmentTarget`<sup>Required</sup> <a name="UpdateAssessmentTarget" id="@cdk_utils/iam.inspector.InspectorActions.property.UpdateAssessmentTarget"></a>

```typescript
public readonly UpdateAssessmentTarget: string;
```

- *Type:* string

[Write] inspector:UpdateAssessmentTarget.

---

### InspectorOperations <a name="InspectorOperations" id="@cdk_utils/iam.inspector.InspectorOperations"></a>

API operation to required IAM actions mapping for inspector.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.inspector.InspectorOperations.Initializer"></a>

```typescript
import { inspector } from '@cdk_utils/iam'

new inspector.InspectorOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.AddAttributesToFindings">AddAttributesToFindings</a></code> | <code>string[]</code> | IAM actions required for the AddAttributesToFindings API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.AttachAssessmentAndRulesPackage">AttachAssessmentAndRulesPackage</a></code> | <code>string[]</code> | IAM actions required for the AttachAssessmentAndRulesPackage API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.CreateApplication">CreateApplication</a></code> | <code>string[]</code> | IAM actions required for the CreateApplication API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.CreateAssessment">CreateAssessment</a></code> | <code>string[]</code> | IAM actions required for the CreateAssessment API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.CreateAssessmentTarget">CreateAssessmentTarget</a></code> | <code>string[]</code> | IAM actions required for the CreateAssessmentTarget API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.CreateAssessmentTemplate">CreateAssessmentTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateAssessmentTemplate API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.CreateExclusionsPreview">CreateExclusionsPreview</a></code> | <code>string[]</code> | IAM actions required for the CreateExclusionsPreview API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.CreateResourceGroup">CreateResourceGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateResourceGroup API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.DeleteApplication">DeleteApplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplication API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.DeleteAssessment">DeleteAssessment</a></code> | <code>string[]</code> | IAM actions required for the DeleteAssessment API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.DeleteAssessmentRun">DeleteAssessmentRun</a></code> | <code>string[]</code> | IAM actions required for the DeleteAssessmentRun API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.DeleteAssessmentTarget">DeleteAssessmentTarget</a></code> | <code>string[]</code> | IAM actions required for the DeleteAssessmentTarget API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.DeleteAssessmentTemplate">DeleteAssessmentTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteAssessmentTemplate API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.DeleteRun">DeleteRun</a></code> | <code>string[]</code> | IAM actions required for the DeleteRun API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.DescribeApplication">DescribeApplication</a></code> | <code>string[]</code> | IAM actions required for the DescribeApplication API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.DescribeAssessment">DescribeAssessment</a></code> | <code>string[]</code> | IAM actions required for the DescribeAssessment API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.DescribeAssessmentRuns">DescribeAssessmentRuns</a></code> | <code>string[]</code> | IAM actions required for the DescribeAssessmentRuns API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.DescribeAssessmentTargets">DescribeAssessmentTargets</a></code> | <code>string[]</code> | IAM actions required for the DescribeAssessmentTargets API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.DescribeAssessmentTemplates">DescribeAssessmentTemplates</a></code> | <code>string[]</code> | IAM actions required for the DescribeAssessmentTemplates API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.DescribeCrossAccountAccessRole">DescribeCrossAccountAccessRole</a></code> | <code>string[]</code> | IAM actions required for the DescribeCrossAccountAccessRole API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.DescribeExclusions">DescribeExclusions</a></code> | <code>string[]</code> | IAM actions required for the DescribeExclusions API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.DescribeFinding">DescribeFinding</a></code> | <code>string[]</code> | IAM actions required for the DescribeFinding API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.DescribeFindings">DescribeFindings</a></code> | <code>string[]</code> | IAM actions required for the DescribeFindings API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.DescribeResourceGroup">DescribeResourceGroup</a></code> | <code>string[]</code> | IAM actions required for the DescribeResourceGroup API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.DescribeResourceGroups">DescribeResourceGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeResourceGroups API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.DescribeRulesPackage">DescribeRulesPackage</a></code> | <code>string[]</code> | IAM actions required for the DescribeRulesPackage API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.DescribeRulesPackages">DescribeRulesPackages</a></code> | <code>string[]</code> | IAM actions required for the DescribeRulesPackages API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.DescribeRun">DescribeRun</a></code> | <code>string[]</code> | IAM actions required for the DescribeRun API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.DetachAssessmentAndRulesPackage">DetachAssessmentAndRulesPackage</a></code> | <code>string[]</code> | IAM actions required for the DetachAssessmentAndRulesPackage API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.ListApplications">ListApplications</a></code> | <code>string[]</code> | IAM actions required for the ListApplications API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.ListAssessmentAgents">ListAssessmentAgents</a></code> | <code>string[]</code> | IAM actions required for the ListAssessmentAgents API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.ListAssessmentRunAgents">ListAssessmentRunAgents</a></code> | <code>string[]</code> | IAM actions required for the ListAssessmentRunAgents API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.ListAssessmentRuns">ListAssessmentRuns</a></code> | <code>string[]</code> | IAM actions required for the ListAssessmentRuns API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.ListAssessments">ListAssessments</a></code> | <code>string[]</code> | IAM actions required for the ListAssessments API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.ListAssessmentTargets">ListAssessmentTargets</a></code> | <code>string[]</code> | IAM actions required for the ListAssessmentTargets API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.ListAssessmentTemplates">ListAssessmentTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListAssessmentTemplates API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.ListAttachedAssessments">ListAttachedAssessments</a></code> | <code>string[]</code> | IAM actions required for the ListAttachedAssessments API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.ListAttachedRulesPackages">ListAttachedRulesPackages</a></code> | <code>string[]</code> | IAM actions required for the ListAttachedRulesPackages API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.ListEventSubscriptions">ListEventSubscriptions</a></code> | <code>string[]</code> | IAM actions required for the ListEventSubscriptions API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.ListExclusions">ListExclusions</a></code> | <code>string[]</code> | IAM actions required for the ListExclusions API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.ListFindings">ListFindings</a></code> | <code>string[]</code> | IAM actions required for the ListFindings API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.ListRulesPackages">ListRulesPackages</a></code> | <code>string[]</code> | IAM actions required for the ListRulesPackages API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.ListRuns">ListRuns</a></code> | <code>string[]</code> | IAM actions required for the ListRuns API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.LocalizeText">LocalizeText</a></code> | <code>string[]</code> | IAM actions required for the LocalizeText API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.opGetAssessmentReport">opGetAssessmentReport</a></code> | <code>string[]</code> | IAM actions required for the GetAssessmentReport API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.opGetAssessmentTelemetry">opGetAssessmentTelemetry</a></code> | <code>string[]</code> | IAM actions required for the GetAssessmentTelemetry API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.opGetExclusionsPreview">opGetExclusionsPreview</a></code> | <code>string[]</code> | IAM actions required for the GetExclusionsPreview API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.opGetTelemetryMetadata">opGetTelemetryMetadata</a></code> | <code>string[]</code> | IAM actions required for the GetTelemetryMetadata API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.opSetTagsForResource">opSetTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the SetTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.PreviewAgents">PreviewAgents</a></code> | <code>string[]</code> | IAM actions required for the PreviewAgents API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.PreviewAgentsForResourceGroup">PreviewAgentsForResourceGroup</a></code> | <code>string[]</code> | IAM actions required for the PreviewAgentsForResourceGroup API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.RegisterCrossAccountAccessRole">RegisterCrossAccountAccessRole</a></code> | <code>string[]</code> | IAM actions required for the RegisterCrossAccountAccessRole API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.RemoveAttributesFromFindings">RemoveAttributesFromFindings</a></code> | <code>string[]</code> | IAM actions required for the RemoveAttributesFromFindings API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.RunAssessment">RunAssessment</a></code> | <code>string[]</code> | IAM actions required for the RunAssessment API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.StartAssessmentRun">StartAssessmentRun</a></code> | <code>string[]</code> | IAM actions required for the StartAssessmentRun API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.StartDataCollection">StartDataCollection</a></code> | <code>string[]</code> | IAM actions required for the StartDataCollection API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.StopAssessmentRun">StopAssessmentRun</a></code> | <code>string[]</code> | IAM actions required for the StopAssessmentRun API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.StopDataCollection">StopDataCollection</a></code> | <code>string[]</code> | IAM actions required for the StopDataCollection API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.SubscribeToEvent">SubscribeToEvent</a></code> | <code>string[]</code> | IAM actions required for the SubscribeToEvent API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.UnsubscribeFromEvent">UnsubscribeFromEvent</a></code> | <code>string[]</code> | IAM actions required for the UnsubscribeFromEvent API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.UpdateApplication">UpdateApplication</a></code> | <code>string[]</code> | IAM actions required for the UpdateApplication API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.UpdateAssessment">UpdateAssessment</a></code> | <code>string[]</code> | IAM actions required for the UpdateAssessment API call. |
| <code><a href="#@cdk_utils/iam.inspector.InspectorOperations.property.UpdateAssessmentTarget">UpdateAssessmentTarget</a></code> | <code>string[]</code> | IAM actions required for the UpdateAssessmentTarget API call. |

---

##### `AddAttributesToFindings`<sup>Required</sup> <a name="AddAttributesToFindings" id="@cdk_utils/iam.inspector.InspectorOperations.property.AddAttributesToFindings"></a>

```typescript
public readonly AddAttributesToFindings: string[];
```

- *Type:* string[]

IAM actions required for the AddAttributesToFindings API call.

---

##### `AttachAssessmentAndRulesPackage`<sup>Required</sup> <a name="AttachAssessmentAndRulesPackage" id="@cdk_utils/iam.inspector.InspectorOperations.property.AttachAssessmentAndRulesPackage"></a>

```typescript
public readonly AttachAssessmentAndRulesPackage: string[];
```

- *Type:* string[]

IAM actions required for the AttachAssessmentAndRulesPackage API call.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.inspector.InspectorOperations.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreateApplication API call.

---

##### `CreateAssessment`<sup>Required</sup> <a name="CreateAssessment" id="@cdk_utils/iam.inspector.InspectorOperations.property.CreateAssessment"></a>

```typescript
public readonly CreateAssessment: string[];
```

- *Type:* string[]

IAM actions required for the CreateAssessment API call.

---

##### `CreateAssessmentTarget`<sup>Required</sup> <a name="CreateAssessmentTarget" id="@cdk_utils/iam.inspector.InspectorOperations.property.CreateAssessmentTarget"></a>

```typescript
public readonly CreateAssessmentTarget: string[];
```

- *Type:* string[]

IAM actions required for the CreateAssessmentTarget API call.

---

##### `CreateAssessmentTemplate`<sup>Required</sup> <a name="CreateAssessmentTemplate" id="@cdk_utils/iam.inspector.InspectorOperations.property.CreateAssessmentTemplate"></a>

```typescript
public readonly CreateAssessmentTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateAssessmentTemplate API call.

---

##### `CreateExclusionsPreview`<sup>Required</sup> <a name="CreateExclusionsPreview" id="@cdk_utils/iam.inspector.InspectorOperations.property.CreateExclusionsPreview"></a>

```typescript
public readonly CreateExclusionsPreview: string[];
```

- *Type:* string[]

IAM actions required for the CreateExclusionsPreview API call.

---

##### `CreateResourceGroup`<sup>Required</sup> <a name="CreateResourceGroup" id="@cdk_utils/iam.inspector.InspectorOperations.property.CreateResourceGroup"></a>

```typescript
public readonly CreateResourceGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateResourceGroup API call.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.inspector.InspectorOperations.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplication API call.

---

##### `DeleteAssessment`<sup>Required</sup> <a name="DeleteAssessment" id="@cdk_utils/iam.inspector.InspectorOperations.property.DeleteAssessment"></a>

```typescript
public readonly DeleteAssessment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAssessment API call.

---

##### `DeleteAssessmentRun`<sup>Required</sup> <a name="DeleteAssessmentRun" id="@cdk_utils/iam.inspector.InspectorOperations.property.DeleteAssessmentRun"></a>

```typescript
public readonly DeleteAssessmentRun: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAssessmentRun API call.

---

##### `DeleteAssessmentTarget`<sup>Required</sup> <a name="DeleteAssessmentTarget" id="@cdk_utils/iam.inspector.InspectorOperations.property.DeleteAssessmentTarget"></a>

```typescript
public readonly DeleteAssessmentTarget: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAssessmentTarget API call.

---

##### `DeleteAssessmentTemplate`<sup>Required</sup> <a name="DeleteAssessmentTemplate" id="@cdk_utils/iam.inspector.InspectorOperations.property.DeleteAssessmentTemplate"></a>

```typescript
public readonly DeleteAssessmentTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAssessmentTemplate API call.

---

##### `DeleteRun`<sup>Required</sup> <a name="DeleteRun" id="@cdk_utils/iam.inspector.InspectorOperations.property.DeleteRun"></a>

```typescript
public readonly DeleteRun: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRun API call.

---

##### `DescribeApplication`<sup>Required</sup> <a name="DescribeApplication" id="@cdk_utils/iam.inspector.InspectorOperations.property.DescribeApplication"></a>

```typescript
public readonly DescribeApplication: string[];
```

- *Type:* string[]

IAM actions required for the DescribeApplication API call.

---

##### `DescribeAssessment`<sup>Required</sup> <a name="DescribeAssessment" id="@cdk_utils/iam.inspector.InspectorOperations.property.DescribeAssessment"></a>

```typescript
public readonly DescribeAssessment: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAssessment API call.

---

##### `DescribeAssessmentRuns`<sup>Required</sup> <a name="DescribeAssessmentRuns" id="@cdk_utils/iam.inspector.InspectorOperations.property.DescribeAssessmentRuns"></a>

```typescript
public readonly DescribeAssessmentRuns: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAssessmentRuns API call.

---

##### `DescribeAssessmentTargets`<sup>Required</sup> <a name="DescribeAssessmentTargets" id="@cdk_utils/iam.inspector.InspectorOperations.property.DescribeAssessmentTargets"></a>

```typescript
public readonly DescribeAssessmentTargets: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAssessmentTargets API call.

---

##### `DescribeAssessmentTemplates`<sup>Required</sup> <a name="DescribeAssessmentTemplates" id="@cdk_utils/iam.inspector.InspectorOperations.property.DescribeAssessmentTemplates"></a>

```typescript
public readonly DescribeAssessmentTemplates: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAssessmentTemplates API call.

---

##### `DescribeCrossAccountAccessRole`<sup>Required</sup> <a name="DescribeCrossAccountAccessRole" id="@cdk_utils/iam.inspector.InspectorOperations.property.DescribeCrossAccountAccessRole"></a>

```typescript
public readonly DescribeCrossAccountAccessRole: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCrossAccountAccessRole API call.

---

##### `DescribeExclusions`<sup>Required</sup> <a name="DescribeExclusions" id="@cdk_utils/iam.inspector.InspectorOperations.property.DescribeExclusions"></a>

```typescript
public readonly DescribeExclusions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeExclusions API call.

---

##### `DescribeFinding`<sup>Required</sup> <a name="DescribeFinding" id="@cdk_utils/iam.inspector.InspectorOperations.property.DescribeFinding"></a>

```typescript
public readonly DescribeFinding: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFinding API call.

---

##### `DescribeFindings`<sup>Required</sup> <a name="DescribeFindings" id="@cdk_utils/iam.inspector.InspectorOperations.property.DescribeFindings"></a>

```typescript
public readonly DescribeFindings: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFindings API call.

---

##### `DescribeResourceGroup`<sup>Required</sup> <a name="DescribeResourceGroup" id="@cdk_utils/iam.inspector.InspectorOperations.property.DescribeResourceGroup"></a>

```typescript
public readonly DescribeResourceGroup: string[];
```

- *Type:* string[]

IAM actions required for the DescribeResourceGroup API call.

---

##### `DescribeResourceGroups`<sup>Required</sup> <a name="DescribeResourceGroups" id="@cdk_utils/iam.inspector.InspectorOperations.property.DescribeResourceGroups"></a>

```typescript
public readonly DescribeResourceGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeResourceGroups API call.

---

##### `DescribeRulesPackage`<sup>Required</sup> <a name="DescribeRulesPackage" id="@cdk_utils/iam.inspector.InspectorOperations.property.DescribeRulesPackage"></a>

```typescript
public readonly DescribeRulesPackage: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRulesPackage API call.

---

##### `DescribeRulesPackages`<sup>Required</sup> <a name="DescribeRulesPackages" id="@cdk_utils/iam.inspector.InspectorOperations.property.DescribeRulesPackages"></a>

```typescript
public readonly DescribeRulesPackages: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRulesPackages API call.

---

##### `DescribeRun`<sup>Required</sup> <a name="DescribeRun" id="@cdk_utils/iam.inspector.InspectorOperations.property.DescribeRun"></a>

```typescript
public readonly DescribeRun: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRun API call.

---

##### `DetachAssessmentAndRulesPackage`<sup>Required</sup> <a name="DetachAssessmentAndRulesPackage" id="@cdk_utils/iam.inspector.InspectorOperations.property.DetachAssessmentAndRulesPackage"></a>

```typescript
public readonly DetachAssessmentAndRulesPackage: string[];
```

- *Type:* string[]

IAM actions required for the DetachAssessmentAndRulesPackage API call.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.inspector.InspectorOperations.property.ListApplications"></a>

```typescript
public readonly ListApplications: string[];
```

- *Type:* string[]

IAM actions required for the ListApplications API call.

---

##### `ListAssessmentAgents`<sup>Required</sup> <a name="ListAssessmentAgents" id="@cdk_utils/iam.inspector.InspectorOperations.property.ListAssessmentAgents"></a>

```typescript
public readonly ListAssessmentAgents: string[];
```

- *Type:* string[]

IAM actions required for the ListAssessmentAgents API call.

---

##### `ListAssessmentRunAgents`<sup>Required</sup> <a name="ListAssessmentRunAgents" id="@cdk_utils/iam.inspector.InspectorOperations.property.ListAssessmentRunAgents"></a>

```typescript
public readonly ListAssessmentRunAgents: string[];
```

- *Type:* string[]

IAM actions required for the ListAssessmentRunAgents API call.

---

##### `ListAssessmentRuns`<sup>Required</sup> <a name="ListAssessmentRuns" id="@cdk_utils/iam.inspector.InspectorOperations.property.ListAssessmentRuns"></a>

```typescript
public readonly ListAssessmentRuns: string[];
```

- *Type:* string[]

IAM actions required for the ListAssessmentRuns API call.

---

##### `ListAssessments`<sup>Required</sup> <a name="ListAssessments" id="@cdk_utils/iam.inspector.InspectorOperations.property.ListAssessments"></a>

```typescript
public readonly ListAssessments: string[];
```

- *Type:* string[]

IAM actions required for the ListAssessments API call.

---

##### `ListAssessmentTargets`<sup>Required</sup> <a name="ListAssessmentTargets" id="@cdk_utils/iam.inspector.InspectorOperations.property.ListAssessmentTargets"></a>

```typescript
public readonly ListAssessmentTargets: string[];
```

- *Type:* string[]

IAM actions required for the ListAssessmentTargets API call.

---

##### `ListAssessmentTemplates`<sup>Required</sup> <a name="ListAssessmentTemplates" id="@cdk_utils/iam.inspector.InspectorOperations.property.ListAssessmentTemplates"></a>

```typescript
public readonly ListAssessmentTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListAssessmentTemplates API call.

---

##### `ListAttachedAssessments`<sup>Required</sup> <a name="ListAttachedAssessments" id="@cdk_utils/iam.inspector.InspectorOperations.property.ListAttachedAssessments"></a>

```typescript
public readonly ListAttachedAssessments: string[];
```

- *Type:* string[]

IAM actions required for the ListAttachedAssessments API call.

---

##### `ListAttachedRulesPackages`<sup>Required</sup> <a name="ListAttachedRulesPackages" id="@cdk_utils/iam.inspector.InspectorOperations.property.ListAttachedRulesPackages"></a>

```typescript
public readonly ListAttachedRulesPackages: string[];
```

- *Type:* string[]

IAM actions required for the ListAttachedRulesPackages API call.

---

##### `ListEventSubscriptions`<sup>Required</sup> <a name="ListEventSubscriptions" id="@cdk_utils/iam.inspector.InspectorOperations.property.ListEventSubscriptions"></a>

```typescript
public readonly ListEventSubscriptions: string[];
```

- *Type:* string[]

IAM actions required for the ListEventSubscriptions API call.

---

##### `ListExclusions`<sup>Required</sup> <a name="ListExclusions" id="@cdk_utils/iam.inspector.InspectorOperations.property.ListExclusions"></a>

```typescript
public readonly ListExclusions: string[];
```

- *Type:* string[]

IAM actions required for the ListExclusions API call.

---

##### `ListFindings`<sup>Required</sup> <a name="ListFindings" id="@cdk_utils/iam.inspector.InspectorOperations.property.ListFindings"></a>

```typescript
public readonly ListFindings: string[];
```

- *Type:* string[]

IAM actions required for the ListFindings API call.

---

##### `ListRulesPackages`<sup>Required</sup> <a name="ListRulesPackages" id="@cdk_utils/iam.inspector.InspectorOperations.property.ListRulesPackages"></a>

```typescript
public readonly ListRulesPackages: string[];
```

- *Type:* string[]

IAM actions required for the ListRulesPackages API call.

---

##### `ListRuns`<sup>Required</sup> <a name="ListRuns" id="@cdk_utils/iam.inspector.InspectorOperations.property.ListRuns"></a>

```typescript
public readonly ListRuns: string[];
```

- *Type:* string[]

IAM actions required for the ListRuns API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.inspector.InspectorOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `LocalizeText`<sup>Required</sup> <a name="LocalizeText" id="@cdk_utils/iam.inspector.InspectorOperations.property.LocalizeText"></a>

```typescript
public readonly LocalizeText: string[];
```

- *Type:* string[]

IAM actions required for the LocalizeText API call.

---

##### `opGetAssessmentReport`<sup>Required</sup> <a name="opGetAssessmentReport" id="@cdk_utils/iam.inspector.InspectorOperations.property.opGetAssessmentReport"></a>

```typescript
public readonly opGetAssessmentReport: string[];
```

- *Type:* string[]

IAM actions required for the GetAssessmentReport API call.

---

##### `opGetAssessmentTelemetry`<sup>Required</sup> <a name="opGetAssessmentTelemetry" id="@cdk_utils/iam.inspector.InspectorOperations.property.opGetAssessmentTelemetry"></a>

```typescript
public readonly opGetAssessmentTelemetry: string[];
```

- *Type:* string[]

IAM actions required for the GetAssessmentTelemetry API call.

---

##### `opGetExclusionsPreview`<sup>Required</sup> <a name="opGetExclusionsPreview" id="@cdk_utils/iam.inspector.InspectorOperations.property.opGetExclusionsPreview"></a>

```typescript
public readonly opGetExclusionsPreview: string[];
```

- *Type:* string[]

IAM actions required for the GetExclusionsPreview API call.

---

##### `opGetTelemetryMetadata`<sup>Required</sup> <a name="opGetTelemetryMetadata" id="@cdk_utils/iam.inspector.InspectorOperations.property.opGetTelemetryMetadata"></a>

```typescript
public readonly opGetTelemetryMetadata: string[];
```

- *Type:* string[]

IAM actions required for the GetTelemetryMetadata API call.

---

##### `opSetTagsForResource`<sup>Required</sup> <a name="opSetTagsForResource" id="@cdk_utils/iam.inspector.InspectorOperations.property.opSetTagsForResource"></a>

```typescript
public readonly opSetTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the SetTagsForResource API call.

---

##### `PreviewAgents`<sup>Required</sup> <a name="PreviewAgents" id="@cdk_utils/iam.inspector.InspectorOperations.property.PreviewAgents"></a>

```typescript
public readonly PreviewAgents: string[];
```

- *Type:* string[]

IAM actions required for the PreviewAgents API call.

---

##### `PreviewAgentsForResourceGroup`<sup>Required</sup> <a name="PreviewAgentsForResourceGroup" id="@cdk_utils/iam.inspector.InspectorOperations.property.PreviewAgentsForResourceGroup"></a>

```typescript
public readonly PreviewAgentsForResourceGroup: string[];
```

- *Type:* string[]

IAM actions required for the PreviewAgentsForResourceGroup API call.

---

##### `RegisterCrossAccountAccessRole`<sup>Required</sup> <a name="RegisterCrossAccountAccessRole" id="@cdk_utils/iam.inspector.InspectorOperations.property.RegisterCrossAccountAccessRole"></a>

```typescript
public readonly RegisterCrossAccountAccessRole: string[];
```

- *Type:* string[]

IAM actions required for the RegisterCrossAccountAccessRole API call.

---

##### `RemoveAttributesFromFindings`<sup>Required</sup> <a name="RemoveAttributesFromFindings" id="@cdk_utils/iam.inspector.InspectorOperations.property.RemoveAttributesFromFindings"></a>

```typescript
public readonly RemoveAttributesFromFindings: string[];
```

- *Type:* string[]

IAM actions required for the RemoveAttributesFromFindings API call.

---

##### `RunAssessment`<sup>Required</sup> <a name="RunAssessment" id="@cdk_utils/iam.inspector.InspectorOperations.property.RunAssessment"></a>

```typescript
public readonly RunAssessment: string[];
```

- *Type:* string[]

IAM actions required for the RunAssessment API call.

---

##### `StartAssessmentRun`<sup>Required</sup> <a name="StartAssessmentRun" id="@cdk_utils/iam.inspector.InspectorOperations.property.StartAssessmentRun"></a>

```typescript
public readonly StartAssessmentRun: string[];
```

- *Type:* string[]

IAM actions required for the StartAssessmentRun API call.

---

##### `StartDataCollection`<sup>Required</sup> <a name="StartDataCollection" id="@cdk_utils/iam.inspector.InspectorOperations.property.StartDataCollection"></a>

```typescript
public readonly StartDataCollection: string[];
```

- *Type:* string[]

IAM actions required for the StartDataCollection API call.

---

##### `StopAssessmentRun`<sup>Required</sup> <a name="StopAssessmentRun" id="@cdk_utils/iam.inspector.InspectorOperations.property.StopAssessmentRun"></a>

```typescript
public readonly StopAssessmentRun: string[];
```

- *Type:* string[]

IAM actions required for the StopAssessmentRun API call.

---

##### `StopDataCollection`<sup>Required</sup> <a name="StopDataCollection" id="@cdk_utils/iam.inspector.InspectorOperations.property.StopDataCollection"></a>

```typescript
public readonly StopDataCollection: string[];
```

- *Type:* string[]

IAM actions required for the StopDataCollection API call.

---

##### `SubscribeToEvent`<sup>Required</sup> <a name="SubscribeToEvent" id="@cdk_utils/iam.inspector.InspectorOperations.property.SubscribeToEvent"></a>

```typescript
public readonly SubscribeToEvent: string[];
```

- *Type:* string[]

IAM actions required for the SubscribeToEvent API call.

---

##### `UnsubscribeFromEvent`<sup>Required</sup> <a name="UnsubscribeFromEvent" id="@cdk_utils/iam.inspector.InspectorOperations.property.UnsubscribeFromEvent"></a>

```typescript
public readonly UnsubscribeFromEvent: string[];
```

- *Type:* string[]

IAM actions required for the UnsubscribeFromEvent API call.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.inspector.InspectorOperations.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApplication API call.

---

##### `UpdateAssessment`<sup>Required</sup> <a name="UpdateAssessment" id="@cdk_utils/iam.inspector.InspectorOperations.property.UpdateAssessment"></a>

```typescript
public readonly UpdateAssessment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAssessment API call.

---

##### `UpdateAssessmentTarget`<sup>Required</sup> <a name="UpdateAssessmentTarget" id="@cdk_utils/iam.inspector.InspectorOperations.property.UpdateAssessmentTarget"></a>

```typescript
public readonly UpdateAssessmentTarget: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAssessmentTarget API call.

---


