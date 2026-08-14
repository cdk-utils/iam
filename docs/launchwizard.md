# `launchwizard` Submodule <a name="`launchwizard` Submodule" id="@cdk_utils/iam.launchwizard"></a>


## Structs <a name="Structs" id="Structs"></a>

### LaunchwizardDeploymentArnComponents <a name="LaunchwizardDeploymentArnComponents" id="@cdk_utils/iam.launchwizard.LaunchwizardDeploymentArnComponents"></a>

Parsed components of a deployment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.launchwizard.LaunchwizardDeploymentArnComponents.Initializer"></a>

```typescript
import { launchwizard } from '@cdk_utils/iam'

const launchwizardDeploymentArnComponents: launchwizard.LaunchwizardDeploymentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardDeploymentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardDeploymentArnComponents.property.deploymentId">deploymentId</a></code> | <code>string</code> | The DeploymentId component. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardDeploymentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardDeploymentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.launchwizard.LaunchwizardDeploymentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdk_utils/iam.launchwizard.LaunchwizardDeploymentArnComponents.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

The DeploymentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.launchwizard.LaunchwizardDeploymentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.launchwizard.LaunchwizardDeploymentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LaunchwizardDeploymentArnProps <a name="LaunchwizardDeploymentArnProps" id="@cdk_utils/iam.launchwizard.LaunchwizardDeploymentArnProps"></a>

Properties for building a deployment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.launchwizard.LaunchwizardDeploymentArnProps.Initializer"></a>

```typescript
import { launchwizard } from '@cdk_utils/iam'

const launchwizardDeploymentArnProps: launchwizard.LaunchwizardDeploymentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardDeploymentArnProps.property.deploymentId">deploymentId</a></code> | <code>string</code> | The DeploymentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardDeploymentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardDeploymentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardDeploymentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdk_utils/iam.launchwizard.LaunchwizardDeploymentArnProps.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

The DeploymentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.launchwizard.LaunchwizardDeploymentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.launchwizard.LaunchwizardDeploymentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.launchwizard.LaunchwizardDeploymentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### LaunchwizardActions <a name="LaunchwizardActions" id="@cdk_utils/iam.launchwizard.LaunchwizardActions"></a>

IAM action constants for the launchwizard service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.Initializer"></a>

```typescript
import { launchwizard } from '@cdk_utils/iam'

new launchwizard.LaunchwizardActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.actionGetDeployment">actionGetDeployment</a></code> | <code>string</code> | [Read] launchwizard:GetDeployment. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.actionGetDeploymentPatternVersion">actionGetDeploymentPatternVersion</a></code> | <code>string</code> | [Read] launchwizard:GetDeploymentPatternVersion. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.actionGetInfrastructureSuggestion">actionGetInfrastructureSuggestion</a></code> | <code>string</code> | [Read] launchwizard:GetInfrastructureSuggestion. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.actionGetIpAddress">actionGetIpAddress</a></code> | <code>string</code> | [Read] launchwizard:GetIpAddress. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.actionGetResourceCostEstimate">actionGetResourceCostEstimate</a></code> | <code>string</code> | [Read] launchwizard:GetResourceCostEstimate. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.actionGetResourceRecommendation">actionGetResourceRecommendation</a></code> | <code>string</code> | [Read] launchwizard:GetResourceRecommendation. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.actionGetSettingsSet">actionGetSettingsSet</a></code> | <code>string</code> | [Read] launchwizard:GetSettingsSet. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.actionGetWorkload">actionGetWorkload</a></code> | <code>string</code> | [Read] launchwizard:GetWorkload. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.actionGetWorkloadAsset">actionGetWorkloadAsset</a></code> | <code>string</code> | [Read] launchwizard:GetWorkloadAsset. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.actionGetWorkloadAssets">actionGetWorkloadAssets</a></code> | <code>string</code> | [Read] launchwizard:GetWorkloadAssets. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.actionGetWorkloadDeploymentPattern">actionGetWorkloadDeploymentPattern</a></code> | <code>string</code> | [Read] launchwizard:GetWorkloadDeploymentPattern. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.CreateAdditionalNode">CreateAdditionalNode</a></code> | <code>string</code> | [Write] launchwizard:CreateAdditionalNode. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.CreateDeployment">CreateDeployment</a></code> | <code>string</code> | [Write] launchwizard:CreateDeployment. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.CreateSettingsSet">CreateSettingsSet</a></code> | <code>string</code> | [Write] launchwizard:CreateSettingsSet. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.DeleteAdditionalNode">DeleteAdditionalNode</a></code> | <code>string</code> | [Write] launchwizard:DeleteAdditionalNode. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.DeleteApp">DeleteApp</a></code> | <code>string</code> | [Write] launchwizard:DeleteApp. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.DeleteDeployment">DeleteDeployment</a></code> | <code>string</code> | [Write] launchwizard:DeleteDeployment. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.DeleteSettingsSet">DeleteSettingsSet</a></code> | <code>string</code> | [Write] launchwizard:DeleteSettingsSet. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.DescribeAdditionalNode">DescribeAdditionalNode</a></code> | <code>string</code> | [Read] launchwizard:DescribeAdditionalNode. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.DescribeProvisionedApp">DescribeProvisionedApp</a></code> | <code>string</code> | [Read] launchwizard:DescribeProvisionedApp. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.DescribeProvisioningEvents">DescribeProvisioningEvents</a></code> | <code>string</code> | [Read] launchwizard:DescribeProvisioningEvents. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.DescribeSettingsSet">DescribeSettingsSet</a></code> | <code>string</code> | [Read] launchwizard:DescribeSettingsSet. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.ListAdditionalNodes">ListAdditionalNodes</a></code> | <code>string</code> | [List] launchwizard:ListAdditionalNodes. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.ListAllowedResources">ListAllowedResources</a></code> | <code>string</code> | [List] launchwizard:ListAllowedResources. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.ListDeploymentEvents">ListDeploymentEvents</a></code> | <code>string</code> | [List] launchwizard:ListDeploymentEvents. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.ListDeploymentPatternVersions">ListDeploymentPatternVersions</a></code> | <code>string</code> | [List] launchwizard:ListDeploymentPatternVersions. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.ListDeployments">ListDeployments</a></code> | <code>string</code> | [List] launchwizard:ListDeployments. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.ListProvisionedApps">ListProvisionedApps</a></code> | <code>string</code> | [List] launchwizard:ListProvisionedApps. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.ListResourceCostEstimates">ListResourceCostEstimates</a></code> | <code>string</code> | [List] launchwizard:ListResourceCostEstimates. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.ListSettingsSets">ListSettingsSets</a></code> | <code>string</code> | [List] launchwizard:ListSettingsSets. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] launchwizard:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.ListWorkloadDeploymentOptions">ListWorkloadDeploymentOptions</a></code> | <code>string</code> | [List] launchwizard:ListWorkloadDeploymentOptions. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.ListWorkloadDeploymentPatterns">ListWorkloadDeploymentPatterns</a></code> | <code>string</code> | [List] launchwizard:ListWorkloadDeploymentPatterns. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.ListWorkloads">ListWorkloads</a></code> | <code>string</code> | [List] launchwizard:ListWorkloads. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.PutSettingsSet">PutSettingsSet</a></code> | <code>string</code> | [Write] launchwizard:PutSettingsSet. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.StartProvisioning">StartProvisioning</a></code> | <code>string</code> | [Write] launchwizard:StartProvisioning. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] launchwizard:TagResource. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] launchwizard:UntagResource. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.UpdateDeployment">UpdateDeployment</a></code> | <code>string</code> | [Write] launchwizard:UpdateDeployment. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardActions.property.UpdateSettingsSet">UpdateSettingsSet</a></code> | <code>string</code> | [Write] launchwizard:UpdateSettingsSet. |

---

##### `actionGetDeployment`<sup>Required</sup> <a name="actionGetDeployment" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.actionGetDeployment"></a>

```typescript
public readonly actionGetDeployment: string;
```

- *Type:* string

[Read] launchwizard:GetDeployment.

---

##### `actionGetDeploymentPatternVersion`<sup>Required</sup> <a name="actionGetDeploymentPatternVersion" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.actionGetDeploymentPatternVersion"></a>

```typescript
public readonly actionGetDeploymentPatternVersion: string;
```

- *Type:* string

[Read] launchwizard:GetDeploymentPatternVersion.

---

##### `actionGetInfrastructureSuggestion`<sup>Required</sup> <a name="actionGetInfrastructureSuggestion" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.actionGetInfrastructureSuggestion"></a>

```typescript
public readonly actionGetInfrastructureSuggestion: string;
```

- *Type:* string

[Read] launchwizard:GetInfrastructureSuggestion.

---

##### `actionGetIpAddress`<sup>Required</sup> <a name="actionGetIpAddress" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.actionGetIpAddress"></a>

```typescript
public readonly actionGetIpAddress: string;
```

- *Type:* string

[Read] launchwizard:GetIpAddress.

---

##### `actionGetResourceCostEstimate`<sup>Required</sup> <a name="actionGetResourceCostEstimate" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.actionGetResourceCostEstimate"></a>

```typescript
public readonly actionGetResourceCostEstimate: string;
```

- *Type:* string

[Read] launchwizard:GetResourceCostEstimate.

---

##### `actionGetResourceRecommendation`<sup>Required</sup> <a name="actionGetResourceRecommendation" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.actionGetResourceRecommendation"></a>

```typescript
public readonly actionGetResourceRecommendation: string;
```

- *Type:* string

[Read] launchwizard:GetResourceRecommendation.

---

##### `actionGetSettingsSet`<sup>Required</sup> <a name="actionGetSettingsSet" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.actionGetSettingsSet"></a>

```typescript
public readonly actionGetSettingsSet: string;
```

- *Type:* string

[Read] launchwizard:GetSettingsSet.

---

##### `actionGetWorkload`<sup>Required</sup> <a name="actionGetWorkload" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.actionGetWorkload"></a>

```typescript
public readonly actionGetWorkload: string;
```

- *Type:* string

[Read] launchwizard:GetWorkload.

---

##### `actionGetWorkloadAsset`<sup>Required</sup> <a name="actionGetWorkloadAsset" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.actionGetWorkloadAsset"></a>

```typescript
public readonly actionGetWorkloadAsset: string;
```

- *Type:* string

[Read] launchwizard:GetWorkloadAsset.

---

##### `actionGetWorkloadAssets`<sup>Required</sup> <a name="actionGetWorkloadAssets" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.actionGetWorkloadAssets"></a>

```typescript
public readonly actionGetWorkloadAssets: string;
```

- *Type:* string

[Read] launchwizard:GetWorkloadAssets.

---

##### `actionGetWorkloadDeploymentPattern`<sup>Required</sup> <a name="actionGetWorkloadDeploymentPattern" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.actionGetWorkloadDeploymentPattern"></a>

```typescript
public readonly actionGetWorkloadDeploymentPattern: string;
```

- *Type:* string

[Read] launchwizard:GetWorkloadDeploymentPattern.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateAdditionalNode`<sup>Required</sup> <a name="CreateAdditionalNode" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.CreateAdditionalNode"></a>

```typescript
public readonly CreateAdditionalNode: string;
```

- *Type:* string

[Write] launchwizard:CreateAdditionalNode.

---

##### `CreateDeployment`<sup>Required</sup> <a name="CreateDeployment" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.CreateDeployment"></a>

```typescript
public readonly CreateDeployment: string;
```

- *Type:* string

[Write] launchwizard:CreateDeployment.

---

##### `CreateSettingsSet`<sup>Required</sup> <a name="CreateSettingsSet" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.CreateSettingsSet"></a>

```typescript
public readonly CreateSettingsSet: string;
```

- *Type:* string

[Write] launchwizard:CreateSettingsSet.

---

##### `DeleteAdditionalNode`<sup>Required</sup> <a name="DeleteAdditionalNode" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.DeleteAdditionalNode"></a>

```typescript
public readonly DeleteAdditionalNode: string;
```

- *Type:* string

[Write] launchwizard:DeleteAdditionalNode.

---

##### `DeleteApp`<sup>Required</sup> <a name="DeleteApp" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.DeleteApp"></a>

```typescript
public readonly DeleteApp: string;
```

- *Type:* string

[Write] launchwizard:DeleteApp.

---

##### `DeleteDeployment`<sup>Required</sup> <a name="DeleteDeployment" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.DeleteDeployment"></a>

```typescript
public readonly DeleteDeployment: string;
```

- *Type:* string

[Write] launchwizard:DeleteDeployment.

---

##### `DeleteSettingsSet`<sup>Required</sup> <a name="DeleteSettingsSet" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.DeleteSettingsSet"></a>

```typescript
public readonly DeleteSettingsSet: string;
```

- *Type:* string

[Write] launchwizard:DeleteSettingsSet.

---

##### `DescribeAdditionalNode`<sup>Required</sup> <a name="DescribeAdditionalNode" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.DescribeAdditionalNode"></a>

```typescript
public readonly DescribeAdditionalNode: string;
```

- *Type:* string

[Read] launchwizard:DescribeAdditionalNode.

---

##### `DescribeProvisionedApp`<sup>Required</sup> <a name="DescribeProvisionedApp" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.DescribeProvisionedApp"></a>

```typescript
public readonly DescribeProvisionedApp: string;
```

- *Type:* string

[Read] launchwizard:DescribeProvisionedApp.

---

##### `DescribeProvisioningEvents`<sup>Required</sup> <a name="DescribeProvisioningEvents" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.DescribeProvisioningEvents"></a>

```typescript
public readonly DescribeProvisioningEvents: string;
```

- *Type:* string

[Read] launchwizard:DescribeProvisioningEvents.

---

##### `DescribeSettingsSet`<sup>Required</sup> <a name="DescribeSettingsSet" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.DescribeSettingsSet"></a>

```typescript
public readonly DescribeSettingsSet: string;
```

- *Type:* string

[Read] launchwizard:DescribeSettingsSet.

---

##### `ListAdditionalNodes`<sup>Required</sup> <a name="ListAdditionalNodes" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.ListAdditionalNodes"></a>

```typescript
public readonly ListAdditionalNodes: string;
```

- *Type:* string

[List] launchwizard:ListAdditionalNodes.

---

##### `ListAllowedResources`<sup>Required</sup> <a name="ListAllowedResources" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.ListAllowedResources"></a>

```typescript
public readonly ListAllowedResources: string;
```

- *Type:* string

[List] launchwizard:ListAllowedResources.

---

##### `ListDeploymentEvents`<sup>Required</sup> <a name="ListDeploymentEvents" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.ListDeploymentEvents"></a>

```typescript
public readonly ListDeploymentEvents: string;
```

- *Type:* string

[List] launchwizard:ListDeploymentEvents.

---

##### `ListDeploymentPatternVersions`<sup>Required</sup> <a name="ListDeploymentPatternVersions" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.ListDeploymentPatternVersions"></a>

```typescript
public readonly ListDeploymentPatternVersions: string;
```

- *Type:* string

[List] launchwizard:ListDeploymentPatternVersions.

---

##### `ListDeployments`<sup>Required</sup> <a name="ListDeployments" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.ListDeployments"></a>

```typescript
public readonly ListDeployments: string;
```

- *Type:* string

[List] launchwizard:ListDeployments.

---

##### `ListProvisionedApps`<sup>Required</sup> <a name="ListProvisionedApps" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.ListProvisionedApps"></a>

```typescript
public readonly ListProvisionedApps: string;
```

- *Type:* string

[List] launchwizard:ListProvisionedApps.

---

##### `ListResourceCostEstimates`<sup>Required</sup> <a name="ListResourceCostEstimates" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.ListResourceCostEstimates"></a>

```typescript
public readonly ListResourceCostEstimates: string;
```

- *Type:* string

[List] launchwizard:ListResourceCostEstimates.

---

##### `ListSettingsSets`<sup>Required</sup> <a name="ListSettingsSets" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.ListSettingsSets"></a>

```typescript
public readonly ListSettingsSets: string;
```

- *Type:* string

[List] launchwizard:ListSettingsSets.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] launchwizard:ListTagsForResource.

---

##### `ListWorkloadDeploymentOptions`<sup>Required</sup> <a name="ListWorkloadDeploymentOptions" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.ListWorkloadDeploymentOptions"></a>

```typescript
public readonly ListWorkloadDeploymentOptions: string;
```

- *Type:* string

[List] launchwizard:ListWorkloadDeploymentOptions.

---

##### `ListWorkloadDeploymentPatterns`<sup>Required</sup> <a name="ListWorkloadDeploymentPatterns" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.ListWorkloadDeploymentPatterns"></a>

```typescript
public readonly ListWorkloadDeploymentPatterns: string;
```

- *Type:* string

[List] launchwizard:ListWorkloadDeploymentPatterns.

---

##### `ListWorkloads`<sup>Required</sup> <a name="ListWorkloads" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.ListWorkloads"></a>

```typescript
public readonly ListWorkloads: string;
```

- *Type:* string

[List] launchwizard:ListWorkloads.

---

##### `PutSettingsSet`<sup>Required</sup> <a name="PutSettingsSet" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.PutSettingsSet"></a>

```typescript
public readonly PutSettingsSet: string;
```

- *Type:* string

[Write] launchwizard:PutSettingsSet.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartProvisioning`<sup>Required</sup> <a name="StartProvisioning" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.StartProvisioning"></a>

```typescript
public readonly StartProvisioning: string;
```

- *Type:* string

[Write] launchwizard:StartProvisioning.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] launchwizard:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] launchwizard:UntagResource.

---

##### `UpdateDeployment`<sup>Required</sup> <a name="UpdateDeployment" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.UpdateDeployment"></a>

```typescript
public readonly UpdateDeployment: string;
```

- *Type:* string

[Write] launchwizard:UpdateDeployment.

---

##### `UpdateSettingsSet`<sup>Required</sup> <a name="UpdateSettingsSet" id="@cdk_utils/iam.launchwizard.LaunchwizardActions.property.UpdateSettingsSet"></a>

```typescript
public readonly UpdateSettingsSet: string;
```

- *Type:* string

[Write] launchwizard:UpdateSettingsSet.

---

### LaunchwizardConditions <a name="LaunchwizardConditions" id="@cdk_utils/iam.launchwizard.LaunchwizardConditions"></a>

Condition key constants and builders for launchwizard.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.launchwizard.LaunchwizardConditions.Initializer"></a>

```typescript
import { launchwizard } from '@cdk_utils/iam'

new launchwizard.LaunchwizardConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.launchwizard.LaunchwizardConditions.requestTag"></a>

```typescript
import { launchwizard } from '@cdk_utils/iam'

launchwizard.LaunchwizardConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.launchwizard.LaunchwizardConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.launchwizard.LaunchwizardConditions.resourceTag"></a>

```typescript
import { launchwizard } from '@cdk_utils/iam'

launchwizard.LaunchwizardConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.launchwizard.LaunchwizardConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.launchwizard.LaunchwizardConditions.tagKeys"></a>

```typescript
import { launchwizard } from '@cdk_utils/iam'

launchwizard.LaunchwizardConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.launchwizard.LaunchwizardConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.launchwizard.LaunchwizardConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.launchwizard.LaunchwizardConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.launchwizard.LaunchwizardConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

### LaunchwizardOperations <a name="LaunchwizardOperations" id="@cdk_utils/iam.launchwizard.LaunchwizardOperations"></a>

API operation to required IAM actions mapping for launchwizard.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.launchwizard.LaunchwizardOperations.Initializer"></a>

```typescript
import { launchwizard } from '@cdk_utils/iam'

new launchwizard.LaunchwizardOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.CreateDeployment">CreateDeployment</a></code> | <code>string[]</code> | IAM actions required for the CreateDeployment API call. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.DeleteDeployment">DeleteDeployment</a></code> | <code>string[]</code> | IAM actions required for the DeleteDeployment API call. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.ListDeploymentEvents">ListDeploymentEvents</a></code> | <code>string[]</code> | IAM actions required for the ListDeploymentEvents API call. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.ListDeploymentPatternVersions">ListDeploymentPatternVersions</a></code> | <code>string[]</code> | IAM actions required for the ListDeploymentPatternVersions API call. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.ListDeployments">ListDeployments</a></code> | <code>string[]</code> | IAM actions required for the ListDeployments API call. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.ListWorkloadDeploymentPatterns">ListWorkloadDeploymentPatterns</a></code> | <code>string[]</code> | IAM actions required for the ListWorkloadDeploymentPatterns API call. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.ListWorkloads">ListWorkloads</a></code> | <code>string[]</code> | IAM actions required for the ListWorkloads API call. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.opGetDeployment">opGetDeployment</a></code> | <code>string[]</code> | IAM actions required for the GetDeployment API call. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.opGetDeploymentPatternVersion">opGetDeploymentPatternVersion</a></code> | <code>string[]</code> | IAM actions required for the GetDeploymentPatternVersion API call. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.opGetWorkload">opGetWorkload</a></code> | <code>string[]</code> | IAM actions required for the GetWorkload API call. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.opGetWorkloadDeploymentPattern">opGetWorkloadDeploymentPattern</a></code> | <code>string[]</code> | IAM actions required for the GetWorkloadDeploymentPattern API call. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.UpdateDeployment">UpdateDeployment</a></code> | <code>string[]</code> | IAM actions required for the UpdateDeployment API call. |

---

##### `CreateDeployment`<sup>Required</sup> <a name="CreateDeployment" id="@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.CreateDeployment"></a>

```typescript
public readonly CreateDeployment: string[];
```

- *Type:* string[]

IAM actions required for the CreateDeployment API call.

---

##### `DeleteDeployment`<sup>Required</sup> <a name="DeleteDeployment" id="@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.DeleteDeployment"></a>

```typescript
public readonly DeleteDeployment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDeployment API call.

---

##### `ListDeploymentEvents`<sup>Required</sup> <a name="ListDeploymentEvents" id="@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.ListDeploymentEvents"></a>

```typescript
public readonly ListDeploymentEvents: string[];
```

- *Type:* string[]

IAM actions required for the ListDeploymentEvents API call.

---

##### `ListDeploymentPatternVersions`<sup>Required</sup> <a name="ListDeploymentPatternVersions" id="@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.ListDeploymentPatternVersions"></a>

```typescript
public readonly ListDeploymentPatternVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListDeploymentPatternVersions API call.

---

##### `ListDeployments`<sup>Required</sup> <a name="ListDeployments" id="@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.ListDeployments"></a>

```typescript
public readonly ListDeployments: string[];
```

- *Type:* string[]

IAM actions required for the ListDeployments API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListWorkloadDeploymentPatterns`<sup>Required</sup> <a name="ListWorkloadDeploymentPatterns" id="@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.ListWorkloadDeploymentPatterns"></a>

```typescript
public readonly ListWorkloadDeploymentPatterns: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkloadDeploymentPatterns API call.

---

##### `ListWorkloads`<sup>Required</sup> <a name="ListWorkloads" id="@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.ListWorkloads"></a>

```typescript
public readonly ListWorkloads: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkloads API call.

---

##### `opGetDeployment`<sup>Required</sup> <a name="opGetDeployment" id="@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.opGetDeployment"></a>

```typescript
public readonly opGetDeployment: string[];
```

- *Type:* string[]

IAM actions required for the GetDeployment API call.

---

##### `opGetDeploymentPatternVersion`<sup>Required</sup> <a name="opGetDeploymentPatternVersion" id="@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.opGetDeploymentPatternVersion"></a>

```typescript
public readonly opGetDeploymentPatternVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetDeploymentPatternVersion API call.

---

##### `opGetWorkload`<sup>Required</sup> <a name="opGetWorkload" id="@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.opGetWorkload"></a>

```typescript
public readonly opGetWorkload: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkload API call.

---

##### `opGetWorkloadDeploymentPattern`<sup>Required</sup> <a name="opGetWorkloadDeploymentPattern" id="@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.opGetWorkloadDeploymentPattern"></a>

```typescript
public readonly opGetWorkloadDeploymentPattern: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkloadDeploymentPattern API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateDeployment`<sup>Required</sup> <a name="UpdateDeployment" id="@cdk_utils/iam.launchwizard.LaunchwizardOperations.property.UpdateDeployment"></a>

```typescript
public readonly UpdateDeployment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDeployment API call.

---

### LaunchwizardResources <a name="LaunchwizardResources" id="@cdk_utils/iam.launchwizard.LaunchwizardResources"></a>

ARN builders, validators, and parsers for launchwizard resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.launchwizard.LaunchwizardResources.Initializer"></a>

```typescript
import { launchwizard } from '@cdk_utils/iam'

new launchwizard.LaunchwizardResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardResources.deployment">deployment</a></code> | Builds an ARN for the deployment resource. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardResources.isValidDeploymentArn">isValidDeploymentArn</a></code> | Validates whether a string is a valid ARN for the deployment resource. |
| <code><a href="#@cdk_utils/iam.launchwizard.LaunchwizardResources.parseDeploymentArn">parseDeploymentArn</a></code> | Parses a deployment ARN into its components. |

---

##### `deployment` <a name="deployment" id="@cdk_utils/iam.launchwizard.LaunchwizardResources.deployment"></a>

```typescript
import { launchwizard } from '@cdk_utils/iam'

launchwizard.LaunchwizardResources.deployment(props: LaunchwizardDeploymentArnProps)
```

Builds an ARN for the deployment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.launchwizard.LaunchwizardResources.deployment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.launchwizard.LaunchwizardDeploymentArnProps">LaunchwizardDeploymentArnProps</a>

---

##### `isValidDeploymentArn` <a name="isValidDeploymentArn" id="@cdk_utils/iam.launchwizard.LaunchwizardResources.isValidDeploymentArn"></a>

```typescript
import { launchwizard } from '@cdk_utils/iam'

launchwizard.LaunchwizardResources.isValidDeploymentArn(arn: string)
```

Validates whether a string is a valid ARN for the deployment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.launchwizard.LaunchwizardResources.isValidDeploymentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeploymentArn` <a name="parseDeploymentArn" id="@cdk_utils/iam.launchwizard.LaunchwizardResources.parseDeploymentArn"></a>

```typescript
import { launchwizard } from '@cdk_utils/iam'

launchwizard.LaunchwizardResources.parseDeploymentArn(arn: string)
```

Parses a deployment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.launchwizard.LaunchwizardResources.parseDeploymentArn.parameter.arn"></a>

- *Type:* string

---




