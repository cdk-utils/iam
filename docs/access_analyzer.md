# `access_analyzer` Submodule <a name="`access_analyzer` Submodule" id="@cdk_utils/iam.access_analyzer"></a>


## Structs <a name="Structs" id="Structs"></a>

### AccessAnalyzerAnalyzerArnComponents <a name="AccessAnalyzerAnalyzerArnComponents" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerAnalyzerArnComponents"></a>

Parsed components of a Analyzer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerAnalyzerArnComponents.Initializer"></a>

```typescript
import { access_analyzer } from '@cdk_utils/iam'

const accessAnalyzerAnalyzerArnComponents: access_analyzer.AccessAnalyzerAnalyzerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerAnalyzerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerAnalyzerArnComponents.property.analyzerName">analyzerName</a></code> | <code>string</code> | The AnalyzerName component. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerAnalyzerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerAnalyzerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerAnalyzerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `analyzerName`<sup>Required</sup> <a name="analyzerName" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerAnalyzerArnComponents.property.analyzerName"></a>

```typescript
public readonly analyzerName: string;
```

- *Type:* string

The AnalyzerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerAnalyzerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerAnalyzerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AccessAnalyzerAnalyzerArnProps <a name="AccessAnalyzerAnalyzerArnProps" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerAnalyzerArnProps"></a>

Properties for building a Analyzer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerAnalyzerArnProps.Initializer"></a>

```typescript
import { access_analyzer } from '@cdk_utils/iam'

const accessAnalyzerAnalyzerArnProps: access_analyzer.AccessAnalyzerAnalyzerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerAnalyzerArnProps.property.analyzerName">analyzerName</a></code> | <code>string</code> | The AnalyzerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerAnalyzerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerAnalyzerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerAnalyzerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `analyzerName`<sup>Required</sup> <a name="analyzerName" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerAnalyzerArnProps.property.analyzerName"></a>

```typescript
public readonly analyzerName: string;
```

- *Type:* string

The AnalyzerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerAnalyzerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerAnalyzerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerAnalyzerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AccessAnalyzerArchiveRuleArnComponents <a name="AccessAnalyzerArchiveRuleArnComponents" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerArchiveRuleArnComponents"></a>

Parsed components of a ArchiveRule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerArchiveRuleArnComponents.Initializer"></a>

```typescript
import { access_analyzer } from '@cdk_utils/iam'

const accessAnalyzerArchiveRuleArnComponents: access_analyzer.AccessAnalyzerArchiveRuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerArchiveRuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerArchiveRuleArnComponents.property.analyzerName">analyzerName</a></code> | <code>string</code> | The AnalyzerName component. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerArchiveRuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerArchiveRuleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerArchiveRuleArnComponents.property.ruleName">ruleName</a></code> | <code>string</code> | The RuleName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerArchiveRuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `analyzerName`<sup>Required</sup> <a name="analyzerName" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerArchiveRuleArnComponents.property.analyzerName"></a>

```typescript
public readonly analyzerName: string;
```

- *Type:* string

The AnalyzerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerArchiveRuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerArchiveRuleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerArchiveRuleArnComponents.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The RuleName component.

---

### AccessAnalyzerArchiveRuleArnProps <a name="AccessAnalyzerArchiveRuleArnProps" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerArchiveRuleArnProps"></a>

Properties for building a ArchiveRule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerArchiveRuleArnProps.Initializer"></a>

```typescript
import { access_analyzer } from '@cdk_utils/iam'

const accessAnalyzerArchiveRuleArnProps: access_analyzer.AccessAnalyzerArchiveRuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerArchiveRuleArnProps.property.analyzerName">analyzerName</a></code> | <code>string</code> | The AnalyzerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerArchiveRuleArnProps.property.ruleName">ruleName</a></code> | <code>string</code> | The RuleName component of the ARN. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerArchiveRuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerArchiveRuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerArchiveRuleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `analyzerName`<sup>Required</sup> <a name="analyzerName" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerArchiveRuleArnProps.property.analyzerName"></a>

```typescript
public readonly analyzerName: string;
```

- *Type:* string

The AnalyzerName component of the ARN.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerArchiveRuleArnProps.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The RuleName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerArchiveRuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerArchiveRuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerArchiveRuleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### AccessAnalyzerActions <a name="AccessAnalyzerActions" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions"></a>

IAM action constants for the access-analyzer service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.Initializer"></a>

```typescript
import { access_analyzer } from '@cdk_utils/iam'

new access_analyzer.AccessAnalyzerActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.actionGetAccessPreview">actionGetAccessPreview</a></code> | <code>string</code> | [Read] access-analyzer:GetAccessPreview. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.actionGetAnalyzedResource">actionGetAnalyzedResource</a></code> | <code>string</code> | [Read] access-analyzer:GetAnalyzedResource. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.actionGetAnalyzer">actionGetAnalyzer</a></code> | <code>string</code> | [Read] access-analyzer:GetAnalyzer. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.actionGetArchiveRule">actionGetArchiveRule</a></code> | <code>string</code> | [Read] access-analyzer:GetArchiveRule. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.actionGetFinding">actionGetFinding</a></code> | <code>string</code> | [Read] access-analyzer:GetFinding. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.actionGetFindingRecommendation">actionGetFindingRecommendation</a></code> | <code>string</code> | [Read] access-analyzer:GetFindingRecommendation. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.actionGetFindingsStatistics">actionGetFindingsStatistics</a></code> | <code>string</code> | [Read] access-analyzer:GetFindingsStatistics. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.actionGetGeneratedPolicy">actionGetGeneratedPolicy</a></code> | <code>string</code> | [Read] access-analyzer:GetGeneratedPolicy. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.ApplyArchiveRule">ApplyArchiveRule</a></code> | <code>string</code> | [Write] access-analyzer:ApplyArchiveRule. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.CancelPolicyGeneration">CancelPolicyGeneration</a></code> | <code>string</code> | [Write] access-analyzer:CancelPolicyGeneration. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.CheckAccessNotGranted">CheckAccessNotGranted</a></code> | <code>string</code> | [Read] access-analyzer:CheckAccessNotGranted. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.CheckNoNewAccess">CheckNoNewAccess</a></code> | <code>string</code> | [Read] access-analyzer:CheckNoNewAccess. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.CheckNoPublicAccess">CheckNoPublicAccess</a></code> | <code>string</code> | [Read] access-analyzer:CheckNoPublicAccess. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.CreateAccessPreview">CreateAccessPreview</a></code> | <code>string</code> | [Write] access-analyzer:CreateAccessPreview. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.CreateAnalyzer">CreateAnalyzer</a></code> | <code>string</code> | [Write] access-analyzer:CreateAnalyzer. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.CreateArchiveRule">CreateArchiveRule</a></code> | <code>string</code> | [Write] access-analyzer:CreateArchiveRule. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.CreateServiceLinkedAnalyzer">CreateServiceLinkedAnalyzer</a></code> | <code>string</code> | [Write] access-analyzer:CreateServiceLinkedAnalyzer. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.DeleteAnalyzer">DeleteAnalyzer</a></code> | <code>string</code> | [Write] access-analyzer:DeleteAnalyzer. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.DeleteArchiveRule">DeleteArchiveRule</a></code> | <code>string</code> | [Write] access-analyzer:DeleteArchiveRule. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.DeleteServiceLinkedAnalyzer">DeleteServiceLinkedAnalyzer</a></code> | <code>string</code> | [Write] access-analyzer:DeleteServiceLinkedAnalyzer. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.GenerateFindingRecommendation">GenerateFindingRecommendation</a></code> | <code>string</code> | [Write] access-analyzer:GenerateFindingRecommendation. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.ListAccessPreviewFindings">ListAccessPreviewFindings</a></code> | <code>string</code> | [Read] access-analyzer:ListAccessPreviewFindings. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.ListAccessPreviews">ListAccessPreviews</a></code> | <code>string</code> | [List] access-analyzer:ListAccessPreviews. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.ListAnalyzedResources">ListAnalyzedResources</a></code> | <code>string</code> | [Read] access-analyzer:ListAnalyzedResources. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.ListAnalyzers">ListAnalyzers</a></code> | <code>string</code> | [List] access-analyzer:ListAnalyzers. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.ListArchiveRules">ListArchiveRules</a></code> | <code>string</code> | [List] access-analyzer:ListArchiveRules. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.ListFindings">ListFindings</a></code> | <code>string</code> | [Read] access-analyzer:ListFindings. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.ListPolicyGenerations">ListPolicyGenerations</a></code> | <code>string</code> | [Read] access-analyzer:ListPolicyGenerations. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] access-analyzer:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.StartPolicyGeneration">StartPolicyGeneration</a></code> | <code>string</code> | [Write] access-analyzer:StartPolicyGeneration. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.StartResourceScan">StartResourceScan</a></code> | <code>string</code> | [Write] access-analyzer:StartResourceScan. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] access-analyzer:TagResource. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] access-analyzer:UntagResource. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.UpdateAnalyzer">UpdateAnalyzer</a></code> | <code>string</code> | [Write] access-analyzer:UpdateAnalyzer. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.UpdateArchiveRule">UpdateArchiveRule</a></code> | <code>string</code> | [Write] access-analyzer:UpdateArchiveRule. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.UpdateFindings">UpdateFindings</a></code> | <code>string</code> | [Write] access-analyzer:UpdateFindings. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.ValidatePolicy">ValidatePolicy</a></code> | <code>string</code> | [Read] access-analyzer:ValidatePolicy. |

---

##### `actionGetAccessPreview`<sup>Required</sup> <a name="actionGetAccessPreview" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.actionGetAccessPreview"></a>

```typescript
public readonly actionGetAccessPreview: string;
```

- *Type:* string

[Read] access-analyzer:GetAccessPreview.

---

##### `actionGetAnalyzedResource`<sup>Required</sup> <a name="actionGetAnalyzedResource" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.actionGetAnalyzedResource"></a>

```typescript
public readonly actionGetAnalyzedResource: string;
```

- *Type:* string

[Read] access-analyzer:GetAnalyzedResource.

---

##### `actionGetAnalyzer`<sup>Required</sup> <a name="actionGetAnalyzer" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.actionGetAnalyzer"></a>

```typescript
public readonly actionGetAnalyzer: string;
```

- *Type:* string

[Read] access-analyzer:GetAnalyzer.

---

##### `actionGetArchiveRule`<sup>Required</sup> <a name="actionGetArchiveRule" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.actionGetArchiveRule"></a>

```typescript
public readonly actionGetArchiveRule: string;
```

- *Type:* string

[Read] access-analyzer:GetArchiveRule.

---

##### `actionGetFinding`<sup>Required</sup> <a name="actionGetFinding" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.actionGetFinding"></a>

```typescript
public readonly actionGetFinding: string;
```

- *Type:* string

[Read] access-analyzer:GetFinding.

---

##### `actionGetFindingRecommendation`<sup>Required</sup> <a name="actionGetFindingRecommendation" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.actionGetFindingRecommendation"></a>

```typescript
public readonly actionGetFindingRecommendation: string;
```

- *Type:* string

[Read] access-analyzer:GetFindingRecommendation.

---

##### `actionGetFindingsStatistics`<sup>Required</sup> <a name="actionGetFindingsStatistics" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.actionGetFindingsStatistics"></a>

```typescript
public readonly actionGetFindingsStatistics: string;
```

- *Type:* string

[Read] access-analyzer:GetFindingsStatistics.

---

##### `actionGetGeneratedPolicy`<sup>Required</sup> <a name="actionGetGeneratedPolicy" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.actionGetGeneratedPolicy"></a>

```typescript
public readonly actionGetGeneratedPolicy: string;
```

- *Type:* string

[Read] access-analyzer:GetGeneratedPolicy.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ApplyArchiveRule`<sup>Required</sup> <a name="ApplyArchiveRule" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.ApplyArchiveRule"></a>

```typescript
public readonly ApplyArchiveRule: string;
```

- *Type:* string

[Write] access-analyzer:ApplyArchiveRule.

---

##### `CancelPolicyGeneration`<sup>Required</sup> <a name="CancelPolicyGeneration" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.CancelPolicyGeneration"></a>

```typescript
public readonly CancelPolicyGeneration: string;
```

- *Type:* string

[Write] access-analyzer:CancelPolicyGeneration.

---

##### `CheckAccessNotGranted`<sup>Required</sup> <a name="CheckAccessNotGranted" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.CheckAccessNotGranted"></a>

```typescript
public readonly CheckAccessNotGranted: string;
```

- *Type:* string

[Read] access-analyzer:CheckAccessNotGranted.

---

##### `CheckNoNewAccess`<sup>Required</sup> <a name="CheckNoNewAccess" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.CheckNoNewAccess"></a>

```typescript
public readonly CheckNoNewAccess: string;
```

- *Type:* string

[Read] access-analyzer:CheckNoNewAccess.

---

##### `CheckNoPublicAccess`<sup>Required</sup> <a name="CheckNoPublicAccess" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.CheckNoPublicAccess"></a>

```typescript
public readonly CheckNoPublicAccess: string;
```

- *Type:* string

[Read] access-analyzer:CheckNoPublicAccess.

---

##### `CreateAccessPreview`<sup>Required</sup> <a name="CreateAccessPreview" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.CreateAccessPreview"></a>

```typescript
public readonly CreateAccessPreview: string;
```

- *Type:* string

[Write] access-analyzer:CreateAccessPreview.

---

##### `CreateAnalyzer`<sup>Required</sup> <a name="CreateAnalyzer" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.CreateAnalyzer"></a>

```typescript
public readonly CreateAnalyzer: string;
```

- *Type:* string

[Write] access-analyzer:CreateAnalyzer.

---

##### `CreateArchiveRule`<sup>Required</sup> <a name="CreateArchiveRule" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.CreateArchiveRule"></a>

```typescript
public readonly CreateArchiveRule: string;
```

- *Type:* string

[Write] access-analyzer:CreateArchiveRule.

---

##### `CreateServiceLinkedAnalyzer`<sup>Required</sup> <a name="CreateServiceLinkedAnalyzer" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.CreateServiceLinkedAnalyzer"></a>

```typescript
public readonly CreateServiceLinkedAnalyzer: string;
```

- *Type:* string

[Write] access-analyzer:CreateServiceLinkedAnalyzer.

---

##### `DeleteAnalyzer`<sup>Required</sup> <a name="DeleteAnalyzer" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.DeleteAnalyzer"></a>

```typescript
public readonly DeleteAnalyzer: string;
```

- *Type:* string

[Write] access-analyzer:DeleteAnalyzer.

---

##### `DeleteArchiveRule`<sup>Required</sup> <a name="DeleteArchiveRule" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.DeleteArchiveRule"></a>

```typescript
public readonly DeleteArchiveRule: string;
```

- *Type:* string

[Write] access-analyzer:DeleteArchiveRule.

---

##### `DeleteServiceLinkedAnalyzer`<sup>Required</sup> <a name="DeleteServiceLinkedAnalyzer" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.DeleteServiceLinkedAnalyzer"></a>

```typescript
public readonly DeleteServiceLinkedAnalyzer: string;
```

- *Type:* string

[Write] access-analyzer:DeleteServiceLinkedAnalyzer.

---

##### `GenerateFindingRecommendation`<sup>Required</sup> <a name="GenerateFindingRecommendation" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.GenerateFindingRecommendation"></a>

```typescript
public readonly GenerateFindingRecommendation: string;
```

- *Type:* string

[Write] access-analyzer:GenerateFindingRecommendation.

---

##### `ListAccessPreviewFindings`<sup>Required</sup> <a name="ListAccessPreviewFindings" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.ListAccessPreviewFindings"></a>

```typescript
public readonly ListAccessPreviewFindings: string;
```

- *Type:* string

[Read] access-analyzer:ListAccessPreviewFindings.

---

##### `ListAccessPreviews`<sup>Required</sup> <a name="ListAccessPreviews" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.ListAccessPreviews"></a>

```typescript
public readonly ListAccessPreviews: string;
```

- *Type:* string

[List] access-analyzer:ListAccessPreviews.

---

##### `ListAnalyzedResources`<sup>Required</sup> <a name="ListAnalyzedResources" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.ListAnalyzedResources"></a>

```typescript
public readonly ListAnalyzedResources: string;
```

- *Type:* string

[Read] access-analyzer:ListAnalyzedResources.

---

##### `ListAnalyzers`<sup>Required</sup> <a name="ListAnalyzers" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.ListAnalyzers"></a>

```typescript
public readonly ListAnalyzers: string;
```

- *Type:* string

[List] access-analyzer:ListAnalyzers.

---

##### `ListArchiveRules`<sup>Required</sup> <a name="ListArchiveRules" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.ListArchiveRules"></a>

```typescript
public readonly ListArchiveRules: string;
```

- *Type:* string

[List] access-analyzer:ListArchiveRules.

---

##### `ListFindings`<sup>Required</sup> <a name="ListFindings" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.ListFindings"></a>

```typescript
public readonly ListFindings: string;
```

- *Type:* string

[Read] access-analyzer:ListFindings.

---

##### `ListPolicyGenerations`<sup>Required</sup> <a name="ListPolicyGenerations" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.ListPolicyGenerations"></a>

```typescript
public readonly ListPolicyGenerations: string;
```

- *Type:* string

[Read] access-analyzer:ListPolicyGenerations.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] access-analyzer:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartPolicyGeneration`<sup>Required</sup> <a name="StartPolicyGeneration" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.StartPolicyGeneration"></a>

```typescript
public readonly StartPolicyGeneration: string;
```

- *Type:* string

[Write] access-analyzer:StartPolicyGeneration.

---

##### `StartResourceScan`<sup>Required</sup> <a name="StartResourceScan" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.StartResourceScan"></a>

```typescript
public readonly StartResourceScan: string;
```

- *Type:* string

[Write] access-analyzer:StartResourceScan.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] access-analyzer:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] access-analyzer:UntagResource.

---

##### `UpdateAnalyzer`<sup>Required</sup> <a name="UpdateAnalyzer" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.UpdateAnalyzer"></a>

```typescript
public readonly UpdateAnalyzer: string;
```

- *Type:* string

[Write] access-analyzer:UpdateAnalyzer.

---

##### `UpdateArchiveRule`<sup>Required</sup> <a name="UpdateArchiveRule" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.UpdateArchiveRule"></a>

```typescript
public readonly UpdateArchiveRule: string;
```

- *Type:* string

[Write] access-analyzer:UpdateArchiveRule.

---

##### `UpdateFindings`<sup>Required</sup> <a name="UpdateFindings" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.UpdateFindings"></a>

```typescript
public readonly UpdateFindings: string;
```

- *Type:* string

[Write] access-analyzer:UpdateFindings.

---

##### `ValidatePolicy`<sup>Required</sup> <a name="ValidatePolicy" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerActions.property.ValidatePolicy"></a>

```typescript
public readonly ValidatePolicy: string;
```

- *Type:* string

[Read] access-analyzer:ValidatePolicy.

---

### AccessAnalyzerConditions <a name="AccessAnalyzerConditions" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions"></a>

Condition key constants and builders for access-analyzer.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.Initializer"></a>

```typescript
import { access_analyzer } from '@cdk_utils/iam'

new access_analyzer.AccessAnalyzerConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.requestTag"></a>

```typescript
import { access_analyzer } from '@cdk_utils/iam'

access_analyzer.AccessAnalyzerConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.resourceTag"></a>

```typescript
import { access_analyzer } from '@cdk_utils/iam'

access_analyzer.AccessAnalyzerConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.tagKeys"></a>

```typescript
import { access_analyzer } from '@cdk_utils/iam'

access_analyzer.AccessAnalyzerConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.property.actionGetAnalyzerConditionKeys">actionGetAnalyzerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAnalyzer action. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.property.CreateAnalyzerConditionKeys">CreateAnalyzerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAnalyzer action. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.property.CreateServiceLinkedAnalyzerConditionKeys">CreateServiceLinkedAnalyzerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateServiceLinkedAnalyzer action. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.property.DeleteAnalyzerConditionKeys">DeleteAnalyzerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAnalyzer action. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.property.DeleteServiceLinkedAnalyzerConditionKeys">DeleteServiceLinkedAnalyzerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteServiceLinkedAnalyzer action. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `actionGetAnalyzerConditionKeys`<sup>Required</sup> <a name="actionGetAnalyzerConditionKeys" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.property.actionGetAnalyzerConditionKeys"></a>

```typescript
public readonly actionGetAnalyzerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAnalyzer action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAnalyzerConditionKeys`<sup>Required</sup> <a name="CreateAnalyzerConditionKeys" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.property.CreateAnalyzerConditionKeys"></a>

```typescript
public readonly CreateAnalyzerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAnalyzer action.

---

##### `CreateServiceLinkedAnalyzerConditionKeys`<sup>Required</sup> <a name="CreateServiceLinkedAnalyzerConditionKeys" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.property.CreateServiceLinkedAnalyzerConditionKeys"></a>

```typescript
public readonly CreateServiceLinkedAnalyzerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateServiceLinkedAnalyzer action.

---

##### `DeleteAnalyzerConditionKeys`<sup>Required</sup> <a name="DeleteAnalyzerConditionKeys" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.property.DeleteAnalyzerConditionKeys"></a>

```typescript
public readonly DeleteAnalyzerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAnalyzer action.

---

##### `DeleteServiceLinkedAnalyzerConditionKeys`<sup>Required</sup> <a name="DeleteServiceLinkedAnalyzerConditionKeys" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.property.DeleteServiceLinkedAnalyzerConditionKeys"></a>

```typescript
public readonly DeleteServiceLinkedAnalyzerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteServiceLinkedAnalyzer action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### AccessAnalyzerOperations <a name="AccessAnalyzerOperations" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations"></a>

API operation to required IAM actions mapping for access-analyzer.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.Initializer"></a>

```typescript
import { access_analyzer } from '@cdk_utils/iam'

new access_analyzer.AccessAnalyzerOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.ApplyArchiveRule">ApplyArchiveRule</a></code> | <code>string[]</code> | IAM actions required for the ApplyArchiveRule API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.CancelPolicyGeneration">CancelPolicyGeneration</a></code> | <code>string[]</code> | IAM actions required for the CancelPolicyGeneration API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.CheckAccessNotGranted">CheckAccessNotGranted</a></code> | <code>string[]</code> | IAM actions required for the CheckAccessNotGranted API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.CheckNoNewAccess">CheckNoNewAccess</a></code> | <code>string[]</code> | IAM actions required for the CheckNoNewAccess API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.CheckNoPublicAccess">CheckNoPublicAccess</a></code> | <code>string[]</code> | IAM actions required for the CheckNoPublicAccess API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.CreateAccessPreview">CreateAccessPreview</a></code> | <code>string[]</code> | IAM actions required for the CreateAccessPreview API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.CreateAnalyzer">CreateAnalyzer</a></code> | <code>string[]</code> | IAM actions required for the CreateAnalyzer API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.CreateArchiveRule">CreateArchiveRule</a></code> | <code>string[]</code> | IAM actions required for the CreateArchiveRule API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.CreateServiceLinkedAnalyzer">CreateServiceLinkedAnalyzer</a></code> | <code>string[]</code> | IAM actions required for the CreateServiceLinkedAnalyzer API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.DeleteAnalyzer">DeleteAnalyzer</a></code> | <code>string[]</code> | IAM actions required for the DeleteAnalyzer API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.DeleteArchiveRule">DeleteArchiveRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteArchiveRule API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.DeleteServiceLinkedAnalyzer">DeleteServiceLinkedAnalyzer</a></code> | <code>string[]</code> | IAM actions required for the DeleteServiceLinkedAnalyzer API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.GenerateFindingRecommendation">GenerateFindingRecommendation</a></code> | <code>string[]</code> | IAM actions required for the GenerateFindingRecommendation API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.ListAccessPreviewFindings">ListAccessPreviewFindings</a></code> | <code>string[]</code> | IAM actions required for the ListAccessPreviewFindings API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.ListAccessPreviews">ListAccessPreviews</a></code> | <code>string[]</code> | IAM actions required for the ListAccessPreviews API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.ListAnalyzedResources">ListAnalyzedResources</a></code> | <code>string[]</code> | IAM actions required for the ListAnalyzedResources API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.ListAnalyzers">ListAnalyzers</a></code> | <code>string[]</code> | IAM actions required for the ListAnalyzers API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.ListArchiveRules">ListArchiveRules</a></code> | <code>string[]</code> | IAM actions required for the ListArchiveRules API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.ListFindings">ListFindings</a></code> | <code>string[]</code> | IAM actions required for the ListFindings API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.ListFindingsV2">ListFindingsV2</a></code> | <code>string[]</code> | IAM actions required for the ListFindingsV2 API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.ListPolicyGenerations">ListPolicyGenerations</a></code> | <code>string[]</code> | IAM actions required for the ListPolicyGenerations API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.opGetAccessPreview">opGetAccessPreview</a></code> | <code>string[]</code> | IAM actions required for the GetAccessPreview API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.opGetAnalyzedResource">opGetAnalyzedResource</a></code> | <code>string[]</code> | IAM actions required for the GetAnalyzedResource API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.opGetAnalyzer">opGetAnalyzer</a></code> | <code>string[]</code> | IAM actions required for the GetAnalyzer API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.opGetArchiveRule">opGetArchiveRule</a></code> | <code>string[]</code> | IAM actions required for the GetArchiveRule API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.opGetFinding">opGetFinding</a></code> | <code>string[]</code> | IAM actions required for the GetFinding API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.opGetFindingRecommendation">opGetFindingRecommendation</a></code> | <code>string[]</code> | IAM actions required for the GetFindingRecommendation API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.opGetFindingsStatistics">opGetFindingsStatistics</a></code> | <code>string[]</code> | IAM actions required for the GetFindingsStatistics API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.opGetFindingV2">opGetFindingV2</a></code> | <code>string[]</code> | IAM actions required for the GetFindingV2 API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.opGetGeneratedPolicy">opGetGeneratedPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetGeneratedPolicy API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.StartPolicyGeneration">StartPolicyGeneration</a></code> | <code>string[]</code> | IAM actions required for the StartPolicyGeneration API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.StartResourceScan">StartResourceScan</a></code> | <code>string[]</code> | IAM actions required for the StartResourceScan API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.UpdateAnalyzer">UpdateAnalyzer</a></code> | <code>string[]</code> | IAM actions required for the UpdateAnalyzer API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.UpdateArchiveRule">UpdateArchiveRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateArchiveRule API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.UpdateFindings">UpdateFindings</a></code> | <code>string[]</code> | IAM actions required for the UpdateFindings API call. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.ValidatePolicy">ValidatePolicy</a></code> | <code>string[]</code> | IAM actions required for the ValidatePolicy API call. |

---

##### `ApplyArchiveRule`<sup>Required</sup> <a name="ApplyArchiveRule" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.ApplyArchiveRule"></a>

```typescript
public readonly ApplyArchiveRule: string[];
```

- *Type:* string[]

IAM actions required for the ApplyArchiveRule API call.

---

##### `CancelPolicyGeneration`<sup>Required</sup> <a name="CancelPolicyGeneration" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.CancelPolicyGeneration"></a>

```typescript
public readonly CancelPolicyGeneration: string[];
```

- *Type:* string[]

IAM actions required for the CancelPolicyGeneration API call.

---

##### `CheckAccessNotGranted`<sup>Required</sup> <a name="CheckAccessNotGranted" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.CheckAccessNotGranted"></a>

```typescript
public readonly CheckAccessNotGranted: string[];
```

- *Type:* string[]

IAM actions required for the CheckAccessNotGranted API call.

---

##### `CheckNoNewAccess`<sup>Required</sup> <a name="CheckNoNewAccess" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.CheckNoNewAccess"></a>

```typescript
public readonly CheckNoNewAccess: string[];
```

- *Type:* string[]

IAM actions required for the CheckNoNewAccess API call.

---

##### `CheckNoPublicAccess`<sup>Required</sup> <a name="CheckNoPublicAccess" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.CheckNoPublicAccess"></a>

```typescript
public readonly CheckNoPublicAccess: string[];
```

- *Type:* string[]

IAM actions required for the CheckNoPublicAccess API call.

---

##### `CreateAccessPreview`<sup>Required</sup> <a name="CreateAccessPreview" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.CreateAccessPreview"></a>

```typescript
public readonly CreateAccessPreview: string[];
```

- *Type:* string[]

IAM actions required for the CreateAccessPreview API call.

---

##### `CreateAnalyzer`<sup>Required</sup> <a name="CreateAnalyzer" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.CreateAnalyzer"></a>

```typescript
public readonly CreateAnalyzer: string[];
```

- *Type:* string[]

IAM actions required for the CreateAnalyzer API call.

---

##### `CreateArchiveRule`<sup>Required</sup> <a name="CreateArchiveRule" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.CreateArchiveRule"></a>

```typescript
public readonly CreateArchiveRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateArchiveRule API call.

---

##### `CreateServiceLinkedAnalyzer`<sup>Required</sup> <a name="CreateServiceLinkedAnalyzer" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.CreateServiceLinkedAnalyzer"></a>

```typescript
public readonly CreateServiceLinkedAnalyzer: string[];
```

- *Type:* string[]

IAM actions required for the CreateServiceLinkedAnalyzer API call.

---

##### `DeleteAnalyzer`<sup>Required</sup> <a name="DeleteAnalyzer" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.DeleteAnalyzer"></a>

```typescript
public readonly DeleteAnalyzer: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAnalyzer API call.

---

##### `DeleteArchiveRule`<sup>Required</sup> <a name="DeleteArchiveRule" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.DeleteArchiveRule"></a>

```typescript
public readonly DeleteArchiveRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteArchiveRule API call.

---

##### `DeleteServiceLinkedAnalyzer`<sup>Required</sup> <a name="DeleteServiceLinkedAnalyzer" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.DeleteServiceLinkedAnalyzer"></a>

```typescript
public readonly DeleteServiceLinkedAnalyzer: string[];
```

- *Type:* string[]

IAM actions required for the DeleteServiceLinkedAnalyzer API call.

---

##### `GenerateFindingRecommendation`<sup>Required</sup> <a name="GenerateFindingRecommendation" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.GenerateFindingRecommendation"></a>

```typescript
public readonly GenerateFindingRecommendation: string[];
```

- *Type:* string[]

IAM actions required for the GenerateFindingRecommendation API call.

---

##### `ListAccessPreviewFindings`<sup>Required</sup> <a name="ListAccessPreviewFindings" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.ListAccessPreviewFindings"></a>

```typescript
public readonly ListAccessPreviewFindings: string[];
```

- *Type:* string[]

IAM actions required for the ListAccessPreviewFindings API call.

---

##### `ListAccessPreviews`<sup>Required</sup> <a name="ListAccessPreviews" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.ListAccessPreviews"></a>

```typescript
public readonly ListAccessPreviews: string[];
```

- *Type:* string[]

IAM actions required for the ListAccessPreviews API call.

---

##### `ListAnalyzedResources`<sup>Required</sup> <a name="ListAnalyzedResources" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.ListAnalyzedResources"></a>

```typescript
public readonly ListAnalyzedResources: string[];
```

- *Type:* string[]

IAM actions required for the ListAnalyzedResources API call.

---

##### `ListAnalyzers`<sup>Required</sup> <a name="ListAnalyzers" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.ListAnalyzers"></a>

```typescript
public readonly ListAnalyzers: string[];
```

- *Type:* string[]

IAM actions required for the ListAnalyzers API call.

---

##### `ListArchiveRules`<sup>Required</sup> <a name="ListArchiveRules" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.ListArchiveRules"></a>

```typescript
public readonly ListArchiveRules: string[];
```

- *Type:* string[]

IAM actions required for the ListArchiveRules API call.

---

##### `ListFindings`<sup>Required</sup> <a name="ListFindings" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.ListFindings"></a>

```typescript
public readonly ListFindings: string[];
```

- *Type:* string[]

IAM actions required for the ListFindings API call.

---

##### `ListFindingsV2`<sup>Required</sup> <a name="ListFindingsV2" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.ListFindingsV2"></a>

```typescript
public readonly ListFindingsV2: string[];
```

- *Type:* string[]

IAM actions required for the ListFindingsV2 API call.

---

##### `ListPolicyGenerations`<sup>Required</sup> <a name="ListPolicyGenerations" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.ListPolicyGenerations"></a>

```typescript
public readonly ListPolicyGenerations: string[];
```

- *Type:* string[]

IAM actions required for the ListPolicyGenerations API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAccessPreview`<sup>Required</sup> <a name="opGetAccessPreview" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.opGetAccessPreview"></a>

```typescript
public readonly opGetAccessPreview: string[];
```

- *Type:* string[]

IAM actions required for the GetAccessPreview API call.

---

##### `opGetAnalyzedResource`<sup>Required</sup> <a name="opGetAnalyzedResource" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.opGetAnalyzedResource"></a>

```typescript
public readonly opGetAnalyzedResource: string[];
```

- *Type:* string[]

IAM actions required for the GetAnalyzedResource API call.

---

##### `opGetAnalyzer`<sup>Required</sup> <a name="opGetAnalyzer" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.opGetAnalyzer"></a>

```typescript
public readonly opGetAnalyzer: string[];
```

- *Type:* string[]

IAM actions required for the GetAnalyzer API call.

---

##### `opGetArchiveRule`<sup>Required</sup> <a name="opGetArchiveRule" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.opGetArchiveRule"></a>

```typescript
public readonly opGetArchiveRule: string[];
```

- *Type:* string[]

IAM actions required for the GetArchiveRule API call.

---

##### `opGetFinding`<sup>Required</sup> <a name="opGetFinding" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.opGetFinding"></a>

```typescript
public readonly opGetFinding: string[];
```

- *Type:* string[]

IAM actions required for the GetFinding API call.

---

##### `opGetFindingRecommendation`<sup>Required</sup> <a name="opGetFindingRecommendation" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.opGetFindingRecommendation"></a>

```typescript
public readonly opGetFindingRecommendation: string[];
```

- *Type:* string[]

IAM actions required for the GetFindingRecommendation API call.

---

##### `opGetFindingsStatistics`<sup>Required</sup> <a name="opGetFindingsStatistics" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.opGetFindingsStatistics"></a>

```typescript
public readonly opGetFindingsStatistics: string[];
```

- *Type:* string[]

IAM actions required for the GetFindingsStatistics API call.

---

##### `opGetFindingV2`<sup>Required</sup> <a name="opGetFindingV2" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.opGetFindingV2"></a>

```typescript
public readonly opGetFindingV2: string[];
```

- *Type:* string[]

IAM actions required for the GetFindingV2 API call.

---

##### `opGetGeneratedPolicy`<sup>Required</sup> <a name="opGetGeneratedPolicy" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.opGetGeneratedPolicy"></a>

```typescript
public readonly opGetGeneratedPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetGeneratedPolicy API call.

---

##### `StartPolicyGeneration`<sup>Required</sup> <a name="StartPolicyGeneration" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.StartPolicyGeneration"></a>

```typescript
public readonly StartPolicyGeneration: string[];
```

- *Type:* string[]

IAM actions required for the StartPolicyGeneration API call.

---

##### `StartResourceScan`<sup>Required</sup> <a name="StartResourceScan" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.StartResourceScan"></a>

```typescript
public readonly StartResourceScan: string[];
```

- *Type:* string[]

IAM actions required for the StartResourceScan API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAnalyzer`<sup>Required</sup> <a name="UpdateAnalyzer" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.UpdateAnalyzer"></a>

```typescript
public readonly UpdateAnalyzer: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAnalyzer API call.

---

##### `UpdateArchiveRule`<sup>Required</sup> <a name="UpdateArchiveRule" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.UpdateArchiveRule"></a>

```typescript
public readonly UpdateArchiveRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateArchiveRule API call.

---

##### `UpdateFindings`<sup>Required</sup> <a name="UpdateFindings" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.UpdateFindings"></a>

```typescript
public readonly UpdateFindings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFindings API call.

---

##### `ValidatePolicy`<sup>Required</sup> <a name="ValidatePolicy" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerOperations.property.ValidatePolicy"></a>

```typescript
public readonly ValidatePolicy: string[];
```

- *Type:* string[]

IAM actions required for the ValidatePolicy API call.

---

### AccessAnalyzerResources <a name="AccessAnalyzerResources" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerResources"></a>

ARN builders, validators, and parsers for access-analyzer resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerResources.Initializer"></a>

```typescript
import { access_analyzer } from '@cdk_utils/iam'

new access_analyzer.AccessAnalyzerResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerResources.analyzer">analyzer</a></code> | Builds an ARN for the Analyzer resource. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerResources.archiveRule">archiveRule</a></code> | Builds an ARN for the ArchiveRule resource. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerResources.isValidAnalyzerArn">isValidAnalyzerArn</a></code> | Validates whether a string is a valid ARN for the Analyzer resource. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerResources.isValidArchiveRuleArn">isValidArchiveRuleArn</a></code> | Validates whether a string is a valid ARN for the ArchiveRule resource. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerResources.parseAnalyzerArn">parseAnalyzerArn</a></code> | Parses a Analyzer ARN into its components. |
| <code><a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerResources.parseArchiveRuleArn">parseArchiveRuleArn</a></code> | Parses a ArchiveRule ARN into its components. |

---

##### `analyzer` <a name="analyzer" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerResources.analyzer"></a>

```typescript
import { access_analyzer } from '@cdk_utils/iam'

access_analyzer.AccessAnalyzerResources.analyzer(props: AccessAnalyzerAnalyzerArnProps)
```

Builds an ARN for the Analyzer resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerResources.analyzer.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerAnalyzerArnProps">AccessAnalyzerAnalyzerArnProps</a>

---

##### `archiveRule` <a name="archiveRule" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerResources.archiveRule"></a>

```typescript
import { access_analyzer } from '@cdk_utils/iam'

access_analyzer.AccessAnalyzerResources.archiveRule(props: AccessAnalyzerArchiveRuleArnProps)
```

Builds an ARN for the ArchiveRule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerResources.archiveRule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.access_analyzer.AccessAnalyzerArchiveRuleArnProps">AccessAnalyzerArchiveRuleArnProps</a>

---

##### `isValidAnalyzerArn` <a name="isValidAnalyzerArn" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerResources.isValidAnalyzerArn"></a>

```typescript
import { access_analyzer } from '@cdk_utils/iam'

access_analyzer.AccessAnalyzerResources.isValidAnalyzerArn(arn: string)
```

Validates whether a string is a valid ARN for the Analyzer resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerResources.isValidAnalyzerArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidArchiveRuleArn` <a name="isValidArchiveRuleArn" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerResources.isValidArchiveRuleArn"></a>

```typescript
import { access_analyzer } from '@cdk_utils/iam'

access_analyzer.AccessAnalyzerResources.isValidArchiveRuleArn(arn: string)
```

Validates whether a string is a valid ARN for the ArchiveRule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerResources.isValidArchiveRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAnalyzerArn` <a name="parseAnalyzerArn" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerResources.parseAnalyzerArn"></a>

```typescript
import { access_analyzer } from '@cdk_utils/iam'

access_analyzer.AccessAnalyzerResources.parseAnalyzerArn(arn: string)
```

Parses a Analyzer ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerResources.parseAnalyzerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseArchiveRuleArn` <a name="parseArchiveRuleArn" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerResources.parseArchiveRuleArn"></a>

```typescript
import { access_analyzer } from '@cdk_utils/iam'

access_analyzer.AccessAnalyzerResources.parseArchiveRuleArn(arn: string)
```

Parses a ArchiveRule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.access_analyzer.AccessAnalyzerResources.parseArchiveRuleArn.parameter.arn"></a>

- *Type:* string

---




